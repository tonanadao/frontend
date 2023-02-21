import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";
import genPurePanel from '../_util/PurePanel';
import generatePicker from './generatePicker';
var DatePicker = generatePicker(dayjsGenerateConfig);
// We don't care debug panel
/* istanbul ignore next */
var PurePanel = genPurePanel(DatePicker, 'picker');
DatePicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
export default DatePicker;