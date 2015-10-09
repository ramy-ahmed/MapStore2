/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var {Panel} = require('react-bootstrap');

var Layers = require('../../../components/Layers/Layers');
var Group = require('../../../components/Layers/Group');
var Layer = require('../../../components/Layers/Layer');

var InlineSpinner = require('../../../components/spinners/InlineSpinner/InlineSpinner');

var icon = require('../img/layers.png');

var LayerTree = React.createClass({
    propTypes: {
        id: React.PropTypes.number,
        buttonContent: React.PropTypes.node,
        loadingList: React.PropTypes.array,
        groups: React.PropTypes.array,
        propertiesChangeHandler: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            buttonContent: <img src={icon}/>,
            loadingList: []
        };
    },
    getNoBackgroudLayers(group) {
        return group.name !== 'background';
    },
    render() {
        if (!this.props.groups) {
            return <div></div>;
        }

        return (
            <Panel style={{overflow: "auto"}} >
                <Layers filter={this.getNoBackgroudLayers}
                    nodes={this.props.groups}>
                    <Group>
                        <Layer
                            propertiesChangeHandler={this.props.propertiesChangeHandler}
                            showSpinner
                            loadingList={this.props.loadingList}
                            >
                            <InlineSpinner/>
                        </Layer>
                    </Group>
                </Layers>
            </Panel>
        );
    }
});

module.exports = LayerTree;