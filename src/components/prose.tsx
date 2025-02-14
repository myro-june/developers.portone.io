import { forwardRef } from "preact/compat";

export function h1({ children, ...props }: any) {
  return (
    <h1
      {...props}
      class={`text-1.875rem mt-12px mb-12px font-600 leading-[1.15] tracking-[-.021em] first:mt-0 last:mb-0 ${
        props.class || ""
      }`.trim()}
    >
      {children}
    </h1>
  );
}

export const h2 = forwardRef<HTMLHeadingElement, any>(function h2(
  { children, ...props },
  ref,
) {
  return (
    <h2
      ref={ref}
      {...props}
      class={`text-1.625rem mt-12px mb-12px font-600 leading-[1.22] tracking-[-.02em] first:mt-0 last:mb-0 ${
        props.class || ""
      }`.trim()}
    >
      {children}
    </h2>
  );
});

export function h3({ children, ...props }: any) {
  return (
    <h3
      {...props}
      class={`text-1.375rem mt-12px mb-12px font-600 leading-[1.25] tracking-[-.018em] first:mt-0 last:mb-0 ${
        props.class || ""
      }`.trim()}
    >
      {children}
    </h3>
  );
}

export function h4({ children, ...props }: any) {
  return (
    <h4
      {...props}
      class={`text-1.125rem mt-8px mb-8px font-600 leading-[1.35] tracking-[-.014em] first:mt-0 last:mb-0 ${
        props.class || ""
      }`.trim()}
    >
      {children}
    </h4>
  );
}

export function h5({ children, ...props }: any) {
  return (
    <h5
      {...props}
      class={`text-.875rem mt-8px mb-8px font-500 leading-[1.4] tracking-[-.006em] first:mt-0 last:mb-0 ${
        props.class || ""
      }`.trim()}
    >
      {children}
    </h5>
  );
}

export function h6({ children, ...props }: any) {
  return (
    <h6
      {...props}
      class={`text-.875rem mt-8px mb-8px font-500 leading-[1.4] tracking-[-.006em] first:mt-0 last:mb-0 ${
        props.class || ""
      }`.trim()}
    >
      {children}
    </h6>
  );
}

export function p({ children, ...props }: any) {
  return (
    <p
      {...props}
      class={`mt-8px mb-8px leading-[1.5] first:mt-0 last:mb-0 ${
        props.class || ""
      }`}
    >
      {children}
    </p>
  );
}

export function a({ children, ...props }: any) {
  return (
    <a
      {...props}
      class="text-orange-5 hover:text-orange-7 cursor-pointer hover:underline"
    >
      {children}
    </a>
  );
}

export function blockquote({ children, ...props }: any) {
  return (
    <blockquote {...props} class="my-2 border-l-4 pl-4">
      {children}
    </blockquote>
  );
}
