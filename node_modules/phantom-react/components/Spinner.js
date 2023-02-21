/**
 * Copyright (c) 2017-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Spinner
 */
'user strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { checkMisnamedProps } from './Utilities/Props';
var createReactClass = require('create-react-class');

var Materials = require('./Material/Materials');
var Animations = require('./Animation/Animations');
var Node = require('./Node');
var Image = require('./Image');

// Setup spinner assets
var Spinner_1 = require('./Resources/viro_spinner_1.png');
var Spinner_1a = require('./Resources/viro_spinner_1a.png');
var Spinner_1_w = require('./Resources/viro_spinner_1_w.png');
var Spinner_1a_w = require('./Resources/viro_spinner_1a_w.png');
/**
 * Composite control for a 2D Spinner
 */
var Spinner = createReactClass({
  propTypes: {
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    scalePivot: PropTypes.arrayOf(PropTypes.number),
    rotationPivot: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.arrayOf(PropTypes.number),
    opacity: PropTypes.number,
    materials: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string
    ]),
    animation: PropTypes.shape({
      interruptible: PropTypes.bool,
      name: PropTypes.string,
      delay: PropTypes.number,
      loop: PropTypes.bool,
      onStart: PropTypes.func,
      onFinish: PropTypes.func,
      run: PropTypes.bool,
    }),
    transformBehaviors: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string
    ]),
    onTransformUpdate: PropTypes.func,
    renderingOrder: PropTypes.number,
    visible: PropTypes.bool,

    /**
     * Spinner visual type for either a light or dark theme.
     * This defaults to dark.
     */
    type: PropTypes.oneOf(['Dark','Light']),
    ignoreEventHandling: PropTypes.bool,
    dragType: PropTypes.oneOf(["FixedDistance", "FixedDistanceOrigin", "FixedToWorld", "FixedToPlane"]),
    dragPlane: PropTypes.shape({
      planePoint : PropTypes.arrayOf(PropTypes.number),
      planeNormal : PropTypes.arrayOf(PropTypes.number),
      maxDistance : PropTypes.number
    }),


    onHover: PropTypes.func,
    onClick: PropTypes.func,
    onClickState: PropTypes.func,
    onTouch: PropTypes.func,
    onDrag: PropTypes.func,
    onPinch: PropTypes.func,
    onRotate: PropTypes.func,
    onFuse: PropTypes.oneOfType([
      PropTypes.shape({
        callback: PropTypes.func.isRequired,
        timeToFuse: PropTypes.number
      }),
      PropTypes.func
    ]),
    physicsBody: PropTypes.shape({
      type: PropTypes.oneOf(['Dynamic','Kinematic','Static']).isRequired,
      mass: PropTypes.number,
      restitution: PropTypes.number,
      shape: PropTypes.shape({
        type: PropTypes.oneOf(["Box", "Sphere", "Compound"]).isRequired,
        params: PropTypes.arrayOf(PropTypes.number)
      }).isRequired,
      friction: PropTypes.number,
      useGravity: PropTypes.bool,
      enabled: PropTypes.bool,
      velocity: PropTypes.arrayOf(PropTypes.number),
      force: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({
          value: PropTypes.arrayOf(PropTypes.number),
          position: PropTypes.arrayOf(PropTypes.number)
        })),
        PropTypes.shape({
          value: PropTypes.arrayOf(PropTypes.number),
          position: PropTypes.arrayOf(PropTypes.number)
        }),
      ]),
      torque: PropTypes.arrayOf(PropTypes.number)
    }),

    viroTag: PropTypes.string,
    onCollision: PropTypes.func,
  },

  getDefaultProps() {
    return {
      type: 'Dark'
    };
  },

  applyImpulse: function(force, position) {
    this._component.applyImpulse(force, position);
  },

  applyTorqueImpulse: function(torque) {
    this._component.applyTorqueImpulse(torque);
  },

  setVelocity: function(velocity) {
    this._component.setVelocity(findNodeHandle(this), velocity);
  },

  _onAnimationStart: function(event: Event) {
    this.props.animation && this.props.animation.onStart && this.props.animation.onStart();
  },

  _onAnimationFinish: function(event: Event) {
    this.props.animation && this.props.animation.onFinish && this.props.animation.onFinish();
  },

  async getTransformAsync() {
    return await this._component.getTransformAsync();
  },

  async getBoundingBoxAsync() {
    return await this._component.getBoundingBoxAsync();
  },

  render: function() {
    checkMisnamedProps("Spinner", this.props);


    // Since transformBehaviors can be either a string or an array, convert the string to a 1-element array.
    let transformBehaviors = typeof this.props.transformBehaviors === 'string' ?
        new Array(this.props.transformBehaviors) : this.props.transformBehaviors;

    // TODO: rather than manually expanding/setting all the props, we should use {...this.props}
    return (
      <Node position={this.props.position} rotation={this.props.rotation} scale={this.props.scale}
            rotationPivot={this.props.rotationPivot}
            scalePivot={this.props.scalePivot}
            physicsBody={this.props.physicsBody}
            opacity={this.props.opacity}
            transformBehaviors={transformBehaviors}
            visible={this.props.visible}
            renderingOrder={this.props.renderingOrder}
            onHover={this.props.onHover}
            onClick={this.props.onClick}
            onClickState={this.props.onClickState}
            onTouch={this.props.onTouch}
            onDrag={this.props.onDrag}
            onPinch={this.props.onPinch}
            onRotate={this.props.onRotate}
            onFuse={this.props.onFuse}
            animation={this.props.animation}
            onAnimationStartViro={this._onAnimationStart}
            onAnimationFinishViro={this._onAnimationFinish}
            dragType={this.props.dragType}
            ignoreEventHandling={this.props.ignoreEventHandling}
            onTransformUpdate={this.props.onTransformUpdate} ref={component => {this._component = component}}>

          <Image source={this._getImage1()} materials={this.props.materials} animation={{name:"_Spinner_clockwiseZ", delay:0, loop:true, run:true}}/>


        {/* Set the posititon of this one to be .01 forward of the other view to help w/ z-fighting*/}

        <Image position={[0, 0, .01]} source={this._getImage1a()} materials={this.props.materials} animation={{name:"_Spinner_counterClockwiseZ", delay:0, loop:true, run:true}} />
      </Node>
    );
  },

  _getImage1() {
    return this.props.type.toUpperCase() == 'Light'.toUpperCase() ? Spinner_1 : Spinner_1_w;
  },

  _getImage1a() {
    return this.props.type.toUpperCase() == 'Light'.toUpperCase() ? Spinner_1a : Spinner_1a_w;
  },
});

Animations.registerAnimations({
  _Spinner_counterClockwiseZ: {
    properties: {
      rotateZ: "+=90"
    },
    duration: 250, //.25 seconds
  },
  _Spinner_clockwiseZ: {
    properties: {
      rotateZ: "-=90"
    },
    duration: 250, //.25 seconds
  },
});

module.exports = Spinner;
