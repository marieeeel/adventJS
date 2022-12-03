const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
  return gifts.map(gift => {
    const wrapped = '*'.repeat(gift.length + 2);
    return `${wrapped}\n*${gift}*\n${wrapped}`;
  });
};

console.log(wrapping(gifts))