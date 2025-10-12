import type { ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';

/**
 * Custom render function that wraps components with necessary providers
 * @param ui - The component to render
 * @param options - Additional render options
 * @returns Rendered component with testing utilities
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { ...options });
};

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };
