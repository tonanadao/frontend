/**
 * Copyright (c) 2016-present, Viro Media, Inc.
 * All rights reserved.
 *
 */
'use strict';

const ReactPhantom = {
  // Components
  get SceneNavigator() { return require('./components/SceneNavigator');},
  get Scene() { return require('./components/Scene'); },
  get Box() { return require('./components/Box'); },
  get Materials() { return require('./components/Material/Materials'); },
  get MaterialVideo() { return require('./components/MaterialVideo'); },
  get Video() { return require('./components/Video'); },
  get Video360() {return require ('./components/Video360'); },
  get Node() { return require('./components/Node'); },
  get Portal() { return require('./components/Portal'); },
  get PortalScene() { return require('./components/PortalScene'); },
  get Camera() { return require('./components/Camera'); },
  get OrbitCamera() { return require('./components/OrbitCamera'); },
  get Sphere() { return require('./components/Sphere'); },
  get Image() { return require('./components/Image'); },
  get Image360() { return require('./components/Image360'); },
  get SkyBox() { return require('./components/SkyBox'); },
  get Object3D() { return require('./components/Object3D'); },
  get AnimatedComponent() { return require('./components/AnimatedComponent'); },
  get Animations() { return require('./components/Animation/Animations'); },
  get DirectionalLight() { return require('./components/DirectionalLight'); },
  get AmbientLight() { return require('./components/AmbientLight'); },
  get OmniLight() { return require('./components/OmniLight'); },
  get SpotLight() { return require('./components/SpotLight'); },
  get FlexView() { return require('./components/FlexView'); },
  get Utils() { return require('./components/Utilities/Utils'); },
  get Props() { return require('./components/Utilities/Props'); },
  get Text() { return require('./components/Text'); },
  get Geometry() { return require('./components/Geometry'); },
  get Surface() { return require('./components/Surface'); },
  get Quad() { return require('./components/Quad'); },
  get AnimatedImage() { return require('./components/AnimatedImage'); },
  get Polygon(){ return require('./components/Polygon'); },
  get Button() { return require('./components/Button'); },
  get Sound() { return require('./components/Sound'); },
  get SoundField() { return require('./components/SoundField'); },
  get SpatialSound() { return require('./components/SpatialSound'); },
  get Controller() { return require('./components/Controller'); },
  get Spinner() { return require('./components/Spinner'); },
  get Polyline() { return require('./components/Polyline'); },
  get Constants() { return require('./components/Constants'); },
  get ParticleEmitter() { return require('./components/ParticleEmitter'); },
  get LightingEnvironment() { return require('./components/LightingEnvironment'); },
  get SceneNavigator3D() { return require('./components/SceneNavigator3D'); },
  get VRSceneNavigator() { return require('./components/VRSceneNavigator'); },
  // AR Components
  get ARSceneNavigator() { return require('./components/AR/ARSceneNavigator'); },
  get ARScene() { return require('./components/AR/ARScene'); },
  get ARPlane() { return require('./components/AR/ARPlane'); },
  get ARPlaneSelector() { return require('./components/AR/ARPlaneSelector'); },
  get ARTrackingTargets() { return require('./components/AR/ARTrackingTargets'); },
  get ARImageMarker() { return require('./components/AR/ARImageMarker'); },
  get ARObjectMarker() { return require('./components/AR/ARObjectMarker'); },
  get ARCamera() { return require('./components/AR/ARCamera'); }
}

module.exports = ReactPhantom;
