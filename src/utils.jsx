const datas = [
   {title: "Stories", link:"/stories", page: "postview" },
   {title: "Liked", link:"/liked", page:"liked"}  ,   
];


export default datas;

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};