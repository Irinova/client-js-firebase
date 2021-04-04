
export const headerModel = {
    _name: 'Sasha',
    id: 'header',
    get name():string {
        return this._name
    },
    set name(name: string) {
        if (this._name !== name) {
            this._name = name;
        }
    }
}
