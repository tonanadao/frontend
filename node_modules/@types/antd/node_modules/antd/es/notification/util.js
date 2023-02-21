export function getPlacementStyle(placement, top, bottom) {
  var style;
  switch (placement) {
    case 'top':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: top,
        bottom: 'auto'
      };
      break;
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;
    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;
    case 'bottom':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: 'auto',
        bottom: bottom
      };
      break;
    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }
  return style;
}
export function getMotion(prefixCls) {
  return {
    motionName: prefixCls + "-fade"
  };
}