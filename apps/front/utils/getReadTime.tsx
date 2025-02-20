/**
 * The `getReadTime` function is designed to estimate the time it will take to read a given Markdown content. It calculates the reading time based on the average reading speed of 200 words per minute.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/getReadTime-1-0-0-04defaf97d9c4dd08098b1a98750d6c4
 *
 * @param markdownContent - The Markdown content for which you want to calculate the reading time.
 * @param suffix - A string that will be appended to the end of the returned reading time. Defaults to 'read'.
 *
 * @returns {string} a string indicating the estimated reading time in minutes, followed by the optional suffix.
 */
export const getReadTime = (markdownContent: string, suffix = 'read'): string => {
    const WORDS_PER_MINUTE = 200;
    const content = markdownContent || '';
  
    const wordCount = (content.match(/\w+/g) || []).length;
    const readingTimeMinutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
  
    return `${readingTimeMinutes} min ${suffix}`;
};
  