//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import * as UuErasmus from "uu_erasmusg01";
import Config from "./config/config.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "WelcomeRow",
  //@@viewOff:statics
};

const CLASS_NAMES = {
  main: () => Config.Css.css`
    padding: 24px 0;
    max-width: 624px;
    margin: 0 auto;
  `,
  text: () => Config.Css.css`
    text-align: center;

    ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: left;`)}
  `,
  iconColumn: () => Config.Css.css`
    padding-right: 24px;
    text-align: center;
  
    ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: right;`)}
  
    .uu5-bricks-icon {
      font-size: 48px;
    }
  `,
  icon: (cssMargin) => Config.Css.css`
    margin-top: ${cssMargin};
    margin-bottom: ${cssMargin};
  `,
};

export const CreateApplication = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    icon: UU5.PropTypes.string,
    textPadding: UU5.PropTypes.string,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    icon: undefined, // default of UU5.Bricks.Icon
    textPadding: null,
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    let { icon, textPadding, children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    let cssMargin = UU5.Common.Tools.fillUnit("-" + textPadding);
    let attrs = UU5.Common.VisualComponent.getAttrs(props, CLASS_NAMES.main());
    return (
<UuErasmus.Bricks.Tracker />
    );
    //@@viewOff:render
  },
});

export default CreateApplication;
