import * as React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'


@observer
class Index extends React.Component {
    @observable indexTitle = '积分'

    @action.bound
    changeIndexTitle(title) {
        this.indexTitle = title
    }
}
const IndexStore = new Index();

export default {
    IndexStore
}