const VideoPlayer = {
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Video",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Video Src', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<iframe class="video-custom-component" src="(\S+)"*$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    let value = match[1];
    value = value ? value.split('"')[0] : ''
    return {
      id: value
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return '<iframe class="video-custom-component" src="' + obj.id +'"></iframe>';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
}

  export default VideoPlayer