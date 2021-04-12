import PropTypes from "prop-types";
import React from "react";
import Gallery from "react-grid-gallery";

import { Container } from "react-bootstrap";

export default class Portofolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
      selectAllChecked: false
    };

    this.onSelectImage = this.onSelectImage.bind(this);
    this.getSelectedImages = this.getSelectedImages.bind(this);
    this.onClickSelectAll = this.onClickSelectAll.bind(this);
  }

  allImagesSelected(images) {
    var f = images.filter(function(img) {
      return img.isSelected === true;
    });
    return f.length === images.length;
  }

  onSelectImage(index, image) {
    var images = this.state.images.slice();
    var img = images[index];
    if (img.hasOwnProperty("isSelected")) img.isSelected = !img.isSelected;
    else img.isSelected = true;

    this.setState({
      images: images
    });

    if (this.allImagesSelected(images)) {
      this.setState({
        selectAllChecked: true
      });
    } else {
      this.setState({
        selectAllChecked: false
      });
    }
  }

  getSelectedImages() {
    var selected = [];
    for (var i = 0; i < this.state.images.length; i++)
      if (this.state.images[i].isSelected === true) selected.push(i);
    return selected;
  }

  onClickSelectAll() {
    var selectAllChecked = !this.state.selectAllChecked;
    this.setState({
      selectAllChecked: selectAllChecked
    });

    var images = this.state.images.slice();
    if (selectAllChecked) {
      for (var i = 0; i < this.state.images.length; i++)
        images[i].isSelected = true;
    } else {
      for (var i = 0; i < this.state.images.length; i++)
        images[i].isSelected = false;
    }
    this.setState({
      images: images
    });
  }

  render() {
    return (
      <div className={"section"} id="portofolio">
        <Container className="fullpage page">
          <div className={"section"}>
            <div
              style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                overflow: "auto"
              }}
            >
              <Gallery
                images={this.state.images}
                onSelectImage={this.onSelectImage}
                showLightboxThumbnails={true}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Portofolio.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      isSelected: PropTypes.bool
    })
  ).isRequired
};

Portofolio.defaultProps = {
  images: [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      tags: [
        { value: "Nature", title: "Nature" },
        { value: "Flora", title: "Flora" }
      ],
      caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Color Pencils (Jeshu John - designerspics.com)"
    },
    {
      src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Red Apples with other Red Fruit (foodiesfeed.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
      thumbnail:
        "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 183,
      caption: "37H (gratispgraphy.com)"
    },
    {
      src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      thumbnail:
        "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 320,
      tags: [{ value: "Nature", title: "Nature" }],
      caption: "8H (gratisography.com)"
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      thumbnail:
        "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      caption: "286H (gratisography.com)"
    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      tags: [{ value: "People", title: "People" }],
      caption: "315H (gratisography.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
      thumbnail:
        "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "201H (gratisography.com)"
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      alt: "Big Ben - London",
      thumbnail:
        "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
      alt: "Red Zone - Paris",
      thumbnail:
        "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      tags: [{ value: "People", title: "People" }],
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
      src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
      alt: "Wood Glass",
      thumbnail:
        "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    }
  ]
};
