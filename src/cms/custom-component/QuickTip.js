const QuickTip = {
  // Internal id of the component
  id: "quickTip",
  // Visible label
  label: "Quick Tip",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'description', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<div class="custom-tip-box-text"> (\S+)*$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    let value = match[1];
    value = value ? value.split('</div>')[0] : ''
    return {  
      id: value
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return '<div class="custom-tip-box-text"> '+ obj.id +'</div>';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<div class="custom-tip-box-text"> '+ obj.id +'</div>'
    );
  }
}

  export default QuickTip