String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

const covertToVuePath = function (path) {
    path = path.split('/')
    let i = 0;
    path = path.map(function (str) {
        str = str.capitalize()
        let next = path[i + 1];
        i++;
        if (typeof next === "undefined") {
            return str + '.vue'
        }
        return str
    })
    return path.join('/')
}

const VIEW_PATH = './views/'
const loadView = function (path) {
    return httpVueLoader(VIEW_PATH + covertToVuePath(path))
}

const COMPONENT_PATH = './components/'
const loadComponent = function (path) {
    return httpVueLoader(COMPONENT_PATH + covertToVuePath(path))
}

const adapter = new LocalStorage('lowdb')
const db = low(adapter)

const initData = function () {
    db.defaults({
        posts: [],
        users: []
    }).write()

    db.set('posts', []).write()

    for (let i = 0; i < 50; i++) {
        db.get('posts')
            .push({
                id: faker.random.uuid()
            }).write()
    }
}