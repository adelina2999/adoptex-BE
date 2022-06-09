module.exports = {
    formatTime: function(date){
    const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    dateStyle: "short",
    timeStyle: "long"
    };
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  stringify: (val) => {
    return JSON.stringify( val );
  }
};
