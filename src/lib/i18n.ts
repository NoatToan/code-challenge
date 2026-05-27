const messages: Record<string, string> = {
  // Validation
  'validation.required': 'This field is required.',
  'validation.integer': 'Value must be a valid integer.',
  'validation.max_safe':
    'The result sum_to_n(n) must be less than Number.MAX_SAFE_INTEGER (2⁵³ − 1).',
  'validation.method_required': 'Please select an implementation.',

  // Form labels
  'form.n_label': 'Value of n',
  'form.n_placeholder': 'e.g. 5',
  'form.method_label': 'Implementation',
  'form.submit': 'Calculate',
  'form.reset': 'Reset',

  // Result
  'result.heading': 'Result',
  'result.expression': 'sum_to_n({n}) = {value}',
  'result.reference': 'Reference',
};

// i18n mock function, in a real application this would be replaced with a proper i18n library
export function t(key: string, vars?: Record<string, string | number>): string {
  let msg = messages[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      msg = msg.replaceAll(`{${k}}`, String(v));
    }
  }
  return msg;
}
