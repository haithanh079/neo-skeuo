import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { NeoButton, NeoSurface } from "./primitives.js";

type ToastItem = { id: string; message: string };

type ToastContextValue = {
  toast: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function NeoToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const baseId = useId();

  const dismiss = useCallback((id: string) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (message: string) => {
      const id = `${baseId}-${Date.now()}`;
      setItems((prev) => [...prev, { id, message }]);
      window.setTimeout(() => dismiss(id), 4000);
    },
    [baseId, dismiss],
  );

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="neo-toast-region" role="region" aria-live="polite" aria-label="Notifications">
        {items.map((item) => (
          <NeoSurface key={item.id} elevation="raised" className="neo-toast neo-animate-in">
            <span>{item.message}</span>
            <NeoButton variant="ghost" aria-label="Dismiss" onClick={() => dismiss(item.id)}>
              ×
            </NeoButton>
          </NeoSurface>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useNeoToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useNeoToast must be used within NeoToastProvider");
  return ctx;
}
