export var dom = {
    create: (parent) => {
        self = {
            render: (object) => {
                parent.innerHTML = object();
            }
        };
    
        return self;
    }
};