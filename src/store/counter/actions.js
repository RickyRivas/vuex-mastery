export default {
  increment(context) {
    setTimeout(() => {
      // commits the 'increment' mutation after every 2s
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    context.commit('increase', payload);
  }
};
