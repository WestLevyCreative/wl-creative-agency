import * as React from "react";

export type ToastItem = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  [key: string]: any;
};

const store: { toasts: ToastItem[]; listeners: Set<() => void> } = {
  toasts: [],
  listeners: new Set(),
};

function emit() {
  for (const l of store.listeners) l();
}

export function toast(input: Omit<ToastItem, "id">) {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  store.toasts.push({ id, ...input });
  emit();
  return id;
}

export function dismiss(id: string) {
  const idx = store.toasts.findIndex((t) => t.id === id);
  if (idx !== -1) {
    store.toasts.splice(idx, 1);
    emit();
  }
}

export function useToast() {
  const [, setTick] = React.useState(0);
  React.useEffect(() => {
    const listener = () => setTick((x) => x + 1);
    store.listeners.add(listener);
    return () => {
      store.listeners.delete(listener);
    };
  }, []);

  return {
    toasts: store.toasts,
    toast,
    dismiss,
  };
}
