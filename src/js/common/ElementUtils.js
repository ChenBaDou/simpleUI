const ElementUtils = {
    addClassName(ele, className) {
        let classNameArr = ele.className.split(" ");
        let classIndex = "";

        classNameArr.indexOf(className) > -1
            ? ((classIndex = classNameArr.indexOf(className)),
            classNameArr.splice(classIndex, 1),
            classNameArr.push(className))
            : classNameArr.push(className);

        ele.className = classNameArr.join(" ");
        return this;
    },

    removeClassName(ele, className) {
        let classNameArr = ele.className.split(" ");
        let classIndex = "";

        classNameArr.indexOf(className) > -1 &&
            ((classIndex = classNameArr.indexOf(className)),
            classNameArr.splice(classIndex, 1));

        ele.className = classNameArr.join(" ");
        return this;
    },
    
    remove(ele) {
        ele.remove();
        return this;
    },

    hide(ele) {
        ele.style.display = "none";
        return this;
    }
};

export default ElementUtils;
