type ClassValue = ClassArray | ClassDictionary | string | number | bigint | null | boolean | undefined;
type ClassDictionary = Record<string, unknown>;
type ClassArray = ClassValue[];

function clsx(inputs: ClassValue[]) {
  let i = 0;
  let tmp;
  let str = '';
  const len = inputs.length;
  for (; i < len; i += 1) {
    tmp = inputs[i];
    if (tmp) {
      if (typeof tmp === 'string') {
        str += (str && ' ') + tmp;
      }
    }
  }
  return str;
}

/**
 * The `cn` function takes an array of class values, filters out any falsy values or non-string values, and concatenates the valid string values with spaces in between. It returns the concatenated string.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/cn-1-0-0-f40f0c09cd4b4ad99183d6b9e4e28f39
 *
 * @param {string[]} inputs - The string array to join
 * @returns {string} The string classname
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
