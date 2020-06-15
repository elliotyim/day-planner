import dates from "./dates";

let data = dates.map(a => ({ ...a }));
let pk = data[data.length - 1].id + 1;

const get = () => {
  return (() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data.map(d => ({ ...d })).sort((a, b) => a.color - b.color));
      }, 100);
    });
  })();
};

const post = async payload => {
  const post = payload => {
    let date = { id: pk++, dates: new Date(), ...payload };
    data.push(date);
  };
  const timer = await setTimeout(post(payload), 100);
  clearTimeout(timer);
};

const deleteDate = async payload => {
  const deleteDate = payload => {
    data = data.filter(
      d =>
        d.dates.getDate() !== new Date().getDate() || d.label !== payload.label
    );
  };
  const timer = await setTimeout(deleteDate(payload), 100);
  clearTimeout(timer);
};

export default { get, post, deleteDate };
