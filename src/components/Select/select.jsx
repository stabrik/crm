import React, {Component} from 'react';
// import Select, { components } from 'react-select';
//
//
//
// const customStyles = {
//     menu: (provided, state) => ({
//         ...provided,
//         // width: state.selectProps.width,
//         borderBottom: '1px dotted pink',
//         padding: '10px 0',
//         color: 'orange',
//         border: '1px solid orange',
//         borderRadius: '16px',
//         boxShadow: 'none',
//     }),
//
//     control: (provided) => ({
//         ...provided,
//         borderRadius: '16px',
//         borderColor: 'orange',
//         boxShadow: 'none',
//         '&:hover': {
//             borderColor: 'orange',
//             boxShadow: 'none'
//         },
//     }),
//
//     option: (provided, state) => ({
//         ...provided,
//         backgroundColor: state.isSelected ? 'darkorange ' : state.isFocused && 'lightgray',
//         '&:hover': {
//             backgroundColor: 'orange',
//             color: '#fff'
//         }
//     }),
//     indicatorSeparator: () => ({
//         backgroundColor: '',
//     }),
// }
// const DropdownIndicator = props => {
//     return (
//         <components.DropdownIndicator {...props}>
//             <svg id="Capa_1" width="20" height="20" enable-background="new 0 0 512.005 512.005" viewBox="0 0 512.005 512.005" xmlns="http://www.w3.org/2000/svg"><g><circle cx="468.004" cy="213.002" r="10"/><path d="m382.005.002c-71.682 0-130 58.318-130 130 0 17.869 3.715 35.547 10.803 51.831-8.704 3.057-16.517 8.438-22.448 15.675l-85.015 102.765c-28.739-28.229-75.959-19.627-93.626 15.551l-60.564 115.132c-3.105 5.902.338 13.151 6.888 14.461l36.802 7.366 11.584 11.585 10.279 40.116c1.608 6.274 8.657 9.358 14.343 6.368l115.133-60.564c35.437-17.8 43.777-65.433 15.162-94.027l-2.354-2.354 102.715-84.974c6.987-5.716 12.183-12.98 15.289-21.161 17.158 8.028 35.933 12.23 55.01 12.23 18.685 0 36.734-3.899 53.648-11.59 5.027-2.286 7.25-8.215 4.964-13.242-2.287-5.028-8.214-7.249-13.242-4.964-14.296 6.5-29.561 9.796-45.37 9.796-18.107 0-35.887-4.483-51.776-12.983-.474-9.046-3.352-17.762-8.318-25.279l17.113-16.476c12.226 9.556 27.163 14.738 42.981 14.738 38.598 0 70-31.402 70-70s-31.402-70-70-70-70 31.402-70 70c0 14.823 4.613 29.012 13.146 40.857l-17.34 16.694c-7.191-4.81-15.527-7.719-24.193-8.418-7.604-15.188-11.613-32.055-11.613-49.133 0-60.654 49.346-110 110-110s110 49.346 110 110c0 14.46-2.774 28.52-8.245 41.789-2.105 5.106.328 10.952 5.433 13.057 5.108 2.104 10.952-.328 13.057-5.433 6.473-15.699 9.755-32.324 9.755-49.413-.001-71.682-58.319-130-130.001-130zm-315.683 445.974-3.042-3.042 156.527-189.208 35.722 35.723zm13.143-120.928c.032-.061.063-.122.094-.184 11.735-23.468 43.209-28.914 62.049-10.057l.937.936-96.667 116.85-20.797-4.162zm107.678 107.399c-.062.031-104.202 54.812-104.202 54.812l-6.147-23.989 116.719-96.559 3.694 3.694c18.822 18.808 13.431 50.294-10.064 62.042zm111.858-178.96-27.992 23.157-38.396-38.396 23.186-28.027c11.559-14.102 32.648-15.134 45.514-2.267 12.62 12.617 12.073 33.764-2.312 45.533zm33.004-123.485c0-27.57 22.43-50 50-50s50 22.43 50 50-22.43 50-50 50c-10.312 0-20.104-3.078-28.373-8.802l35.308-33.994c3.979-3.831 4.099-10.161.269-14.14s-10.162-4.098-14.14-.269l-35.297 33.984c-5.05-7.946-7.767-17.175-7.767-26.779z"/></g></svg>
//         </components.DropdownIndicator>
//     );
// };
//
// const SelectCustom = (props) => (
//     <Select
//         styles={customStyles}
//         width='200px'
//         options={props.options}
//         placeholder={"Select"}
//         components={{ DropdownIndicator }}
//     />
// );
//
// export {SelectCustom}

class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            dragOver: false,
            errorNotification: null
        };
        this.fileInput = React.createRef();
    }

    /**
     Drag and Drop Event Handlers
     **/
    handleDragEnter = (e) => {
        e.preventDefault();
    }
    handleDragOver = (e) => {
        e.preventDefault();
        if (!this.state.dragOver) {
            this.setState({
                dragOver: true
            });
        }
    }
    handleDragLeave = (e) => {
        e.preventDefault();
        this.setState({
            dragOver: false
        });
    }
    handleDrop = (e) => {
        e.preventDefault();
        let file = e.dataTransfer.files[0];

        // Validate file is of type Image
        let fileType = file.type.split("/")[0];
        if (fileType !== "image") {
            this.setState({
                file: null,
                errorNotification: "Not an image File",
                dragOver: false
            });
            return setTimeout(() => {
                this.setState({
                    errorNotification: null
                });
            }, 3000);
        }
        // this.refs.image.files = e.dataTransfer.files;
        document.getElementById('upload-image-input').fileList =  e.dataTransfer.files[0];
        this.setState({
            file,
            dragOver: false
        });
    }


    /**
     Handle Manually (File Input) Added Files
     **/
    handleAddImage = (e) => {
        e.preventDefault();
        let file = this.fileInput.current.files[0];

        // Validate file is of type Image
        let fileType = this.fileInput.current.files[0].type.split('/')[0];
        if (fileType !== "image") {
            console.log("Not an image file");
            this.setState({
                file: null,
                errorNotification: "Not an image File",
                dragOverClass: ""
            });
            return setTimeout(() => {
                this.setState({
                    errorNotification: null
                });
            }, 3000);
        }

        this.setState({
            file
        });
    }

    /**
     Handle Upload after Upload Button Clicked
     **/
    handleUploadImage = (e) => {
        e.preventDefault();
        if (this.fileInput.current.files[0]) {
            console.log("Uploading Image " + this.fileInput.current.files[0].name + "");
            /**
             Handle image Upload
             **/
            console.log(this.state.file)
            // console.log(new FormData(this.state.file))
            // // let formData = new FormData(this.fileInput.current.files[0])
            // fetch('#', {
            //     method: 'POST',
            //     body: new FormData(this.state.file),
            // }).then(r => console.log(r));
        }
    }
    handleCancelUpload = (e) => {
        e.preventDefault();
        this.setState({
            file: null
        });
    }


    render() {

        // Match drag over css to hover css
        let dragOverClass = this.state.dragOver
            ? `display-box drag-over`
            : `display-box`;

        // If file is set, change upload box text to file name
        let uploadText = this.state.file
            ? <div>
                <h4>{this.state.file.name}</h4>
                <button
                    className="cancel-upload-button btn btn-warning"
                    onClick={this.handleCancelUpload}
                >
                    Cancel
                </button>
                <button
                    className="upload-button btn btn-primary"
                    onClick={this.handleUploadImage}
                >
                    Upload
                </button>
            </div>
            : <div>
                <h4>Choose Files to Upload</h4>
            </div>;

        // Show Error message if file type is not an image
        let errorNotification = this.state.errorNotification
            ? <div className="error-notification">
                <p>{this.state.errorNotification}</p>
            </div>
            : null;


        return (
            <div className="image-uploader-wrapper">
                <div className={dragOverClass}>
                    <div className="icon-text-box">
                        <div className="upload-icon">
                            <svg id="Capa_1" enableBackground="new 0 0 512.005 512.005" height="50" viewBox="0 0 512.005 512.005" width="50" xmlns="http://www.w3.org/2000/svg"><g><circle cx="468.004" cy="213.002" r="10"/><path d="m382.005.002c-71.682 0-130 58.318-130 130 0 17.869 3.715 35.547 10.803 51.831-8.704 3.057-16.517 8.438-22.448 15.675l-85.015 102.765c-28.739-28.229-75.959-19.627-93.626 15.551l-60.564 115.132c-3.105 5.902.338 13.151 6.888 14.461l36.802 7.366 11.584 11.585 10.279 40.116c1.608 6.274 8.657 9.358 14.343 6.368l115.133-60.564c35.437-17.8 43.777-65.433 15.162-94.027l-2.354-2.354 102.715-84.974c6.987-5.716 12.183-12.98 15.289-21.161 17.158 8.028 35.933 12.23 55.01 12.23 18.685 0 36.734-3.899 53.648-11.59 5.027-2.286 7.25-8.215 4.964-13.242-2.287-5.028-8.214-7.249-13.242-4.964-14.296 6.5-29.561 9.796-45.37 9.796-18.107 0-35.887-4.483-51.776-12.983-.474-9.046-3.352-17.762-8.318-25.279l17.113-16.476c12.226 9.556 27.163 14.738 42.981 14.738 38.598 0 70-31.402 70-70s-31.402-70-70-70-70 31.402-70 70c0 14.823 4.613 29.012 13.146 40.857l-17.34 16.694c-7.191-4.81-15.527-7.719-24.193-8.418-7.604-15.188-11.613-32.055-11.613-49.133 0-60.654 49.346-110 110-110s110 49.346 110 110c0 14.46-2.774 28.52-8.245 41.789-2.105 5.106.328 10.952 5.433 13.057 5.108 2.104 10.952-.328 13.057-5.433 6.473-15.699 9.755-32.324 9.755-49.413-.001-71.682-58.319-130-130.001-130zm-315.683 445.974-3.042-3.042 156.527-189.208 35.722 35.723zm13.143-120.928c.032-.061.063-.122.094-.184 11.735-23.468 43.209-28.914 62.049-10.057l.937.936-96.667 116.85-20.797-4.162zm107.678 107.399c-.062.031-104.202 54.812-104.202 54.812l-6.147-23.989 116.719-96.559 3.694 3.694c18.822 18.808 13.431 50.294-10.064 62.042zm111.858-178.96-27.992 23.157-38.396-38.396 23.186-28.027c11.559-14.102 32.648-15.134 45.514-2.267 12.62 12.617 12.073 33.764-2.312 45.533zm33.004-123.485c0-27.57 22.43-50 50-50s50 22.43 50 50-22.43 50-50 50c-10.312 0-20.104-3.078-28.373-8.802l35.308-33.994c3.979-3.831 4.099-10.161.269-14.14s-10.162-4.098-14.14-.269l-35.297 33.984c-5.05-7.946-7.767-17.175-7.767-26.779z"/></g></svg>
                        </div>
                        <div className="upload-text">
                            {uploadText}
                        </div>
                        {errorNotification}
                    </div>
                    <div>
                        <input
                            type="file"
                            ref={this.fileInput}
                            id="upload-image-input"
                            className="upload-image-input"
                            accept="image/*"
                            onDrop={this.handleDrop}
                            onDragEnter={this.handleDragEnter}
                            onDragOver={this.handleDragOver}
                            onDragLeave={this.handleDragLeave}
                            onChange={this.handleAddImage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ImageUploader />
        );
    }
}

export default ImageUpload;

