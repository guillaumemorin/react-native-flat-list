import React, {PureComponent} from 'react';
// import {Loader, Empty} from '../';
// import style from './style';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';

export default class List extends PureComponent{
    static propTypes = {
        numColumns: PropTypes.number,
        navigation: PropTypes.object,
        data: PropTypes.array,
        onEndReached: PropTypes.func,
        onRefresh: PropTypes.func,
        renderRow: PropTypes.func,
        onSetRef: PropTypes.func,
        type: PropTypes.string,
        ended: PropTypes.bool,
        pageLoader: PropTypes.bool,
        infiniteScrollLoader: PropTypes.bool,
        style: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ]),
        ListHeaderComponent: PropTypes.func,
        ListEmptyComponent: PropTypes.func,
        ListFooterComponent: PropTypes.func,
        marginBottom: PropTypes.number,
        loaderMarginBottom: PropTypes.number,
        sceneRef: PropTypes.string,
        onScroll: PropTypes.func
    }
    static defaultProps = {
        style: {},
        ended: false,
        infiniteScrollLoader: true,
        marginBottom: 0
    }
    constructor(props){
        super(props);
        this.renderRow = (item, sectionId, rowId) => this.renderRowContent(item, sectionId, rowId);
        this.renderItem = (data) => this.renderItemContent(data);
        this.onEndReached = () => this.endReached();
        this.onRefresh = () => this.refresh();
        this.renderFooter = () => this.renderFooterContent();
        this.setKeyExtractor = (item, index) => this.setKey(item, index);
        this.state = {
            isRefreshing: false
        }
    }
    componentWillReceiveProps(){
        const {isRefreshing} = this.state;
        if(!isRefreshing) return;
        return this.setState({isRefreshing: false});
    }
    endReached() {
        const {onEndReached} = this.props;
        if (onEndReached) return onEndReached();
    }
    refresh() {
        const {onRefresh} = this.props;
        this.setState({isRefreshing: true});
        if (onRefresh) return onRefresh();
    }
    setKey(item, index){
        const {type} = this.props;
        return `${type}-${index}`;
    }
    renderRowContent(item, sectionId, rowId){
        const {renderRow} = this.props;
        if(renderRow) return renderRow(item, sectionId, rowId);
    }
    renderItemContent(data){
        const {renderRow} = this.props;
        if(renderRow) return renderRow(data);
    }
    render(){
        const {isRefreshing} = this.state;
        const {
            style: customStyle,
            data,
            numColumns,
            ListHeaderComponent,
            ListEmptyComponent,
            ListFooterComponent,
            onScroll
        } = this.props;
        const numColumnsProp = numColumns > 1
            ? {numColumns, columnWrapperStyle: {flex: 1}}
            : {};
        return (
            <FlatList {...numColumnsProp}
                      data={data}
                      extraData={data}
                      ListHeaderComponent={ListHeaderComponent}
                      ListEmptyComponent={ListEmptyComponent}
                      ListFooterComponent={ListFooterComponent}
                      style={[customStyle]}
                      onScroll={onScroll}
                      onRefresh={this.onRefresh}
                      renderItem={this.renderItem}
                      onEndReached={this.onEndReached}
                      keyExtractor={this.setKeyExtractor}
                      onEndReachedThreshold={1}
                      refreshing={isRefreshing} />
        );
    }
}
