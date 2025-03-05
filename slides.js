function calculatePages() {
  const pages = parseInt(document.getElementById('number').value);
  let oddPages = [1, 2];
  let oddTemp = 4;
  let evenPages = [3, 4];
  let evenTemp = 6;
  let i = 1;
  let j = 1;
  while (i < pages / 2) {
      if (oddTemp < pages) {
          oddPages.push((oddTemp = oddTemp + 1));
      }
      if (oddTemp < pages) {
          oddPages.push((oddTemp = oddTemp + 1));
      }
      oddTemp = oddTemp + 2;
      i = i + 2;
  }
  while (j < pages / 2) {
      if (evenTemp < pages) {
          evenPages.push((evenTemp = evenTemp + 1));
      }
      if (evenTemp < pages) {
          evenPages.push((evenTemp = evenTemp + 1));
      }
      evenTemp = evenTemp + 2;
      j = j + 2;
  }

  const oddPagesText = oddPages.join(',');
  const evenPagesText = evenPages.join(',');

  document.getElementById('oddPages').textContent = truncateText(oddPagesText);
  document.getElementById('oddPages').dataset.fullText = oddPagesText;

  document.getElementById('evenPages').textContent = truncateText(evenPagesText);
  document.getElementById('evenPages').dataset.fullText = evenPagesText;
}

function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).dataset.fullText;
  navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard');
  }).catch(err => {
      console.error('Failed to copy: ', err);
  });
}

function truncateText(text, maxLength = 50) {
  if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
  }
  return text;
}