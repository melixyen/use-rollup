export default {
    getMax: (ary)=>{
        return Math.max.apply(null, ary);
    },
    getMin: (ary)=>{
        return Math.min.apply(null, ary);
    },
    getMaxMin: (ary)=>{
        return [Math.max.apply(null, ary), Math.min.apply(null, ary)]
    }
}
