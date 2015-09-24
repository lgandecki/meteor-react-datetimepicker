ReactDatetimePicker = React.createClass({
  propTypes: {
    configuration: React.PropTypes.string,
    inputProps: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
  },
  input (){
    return $(React.findDOMNode(this.refs.input));
  },
  componentDidMount() {
    var defaults = DatetimePicker.defaults;
    if (this.props.configuration != null){
      if (DatetimePicker.configurations[this.props.configuration] != null){
        defaults = DatetimePicker.configurations[this.props.configuration];
      }
    }
    var opts = _.extend({}, defaults, this.props.extra);
    this.input()
      .datetimepicker(opts)
      .on('dp.change', this.onChange)
      .val(this.props.value);
  },
  componentDidUpdate(){
    this.input().val(this.props.value);
  },
  shouldComponentUpdate(nextProps, nextState){
    return this.props.value !== nextProps.value;
  },
  onChange(e){
    this.props.onChange(e.date);
  },
  noop(){},
  render() {
    return (<div className="position-relative">
      <input {...this.props.inputProps} ref="input" type="text" />
    </div>);
  }
});

