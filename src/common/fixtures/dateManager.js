import dates from "./dates";

let data = dates.map(a => ({ ...a }));

const get = () => {
  return (() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 100);
    });
  })();
};

const post = async date => {
  const post = date => {
    data.push(date);
  };
  const timer = await setTimeout(post(date), 100);
  clearTimeout(timer);
};

const deleteDate = async payload => {
  const deleteDate = payload => {
    data = data.filter(
      d =>
        d.dates.getDate() !== payload.today.getDate() ||
        d.popover.label !== payload.label
    );
  };
  const timer = await setTimeout(deleteDate(payload), 100);
  clearTimeout(timer);
};

export default { get, post, deleteDate };
