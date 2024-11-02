/**
 * Downloads file with provided content and name through temporary `<a>` trick.
 */
export const downloadFile = (content: string, name: string): void => {
  const link = window.document.createElement('a');
  link.href = encodeURI(content);
  link.download = name;
  link.hidden = true;

  window.document.body.appendChild(link); // Required for FF
  link.click();
  window.document.body.removeChild(link);
};
