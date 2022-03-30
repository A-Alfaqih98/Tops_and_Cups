import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from '../components/Select';
import Input from '../components/Input';
import ImageInput from '../components/ImageInput';
import black_hoody from '../hoodies/black_hoody.webp';
import blue_hoody from '../hoodies/blue_hoody.webp';
import red_hoody from '../hoodies/red_hoody.webp';
import green_hoody from '../hoodies/green_hoody.webp';
import black_shirt from '../shirts/black_shirt.webp';
import blue_shirt from '../shirts/blue_shirt.webp';
import red_shirt from '../shirts/red_shirt.webp';
import green_shirt from '../shirts/green_shirt.webp';
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';
import white_mug from '../mugs/white_mug.png';
import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConfirmPageLeave } from 'react-leave-page-confirm';

function Costume() {
  let param = useParams().item;
  const navigate = useNavigate();
  const history = createBrowserHistory();

  /* 'You did not save this design. \n are you sure you want to leave?' */

  /* States */
  const [itemColor, setItemColor] = useState(
    param === 't-shirt'
      ? black_shirt
      : param === 'hoody'
      ? black_hoody
      : white_mug
  );

  const [textFeatures, setTextFeatures] = useState([
    {
      id: 1,
      type: 'Font',
      options: ['Arial', 'Courier', 'Times', 'Impact'],
      selected: 'Arial',
    },
    {
      id: 2,
      type: 'Color',
      options: ['red', 'blue', 'black', 'white', 'green', 'yellow'],
      selected: 'red',
    },
  ]);

  const [text, setText] = useState({
    text: '',
    textToggle: true,
    positionX: 0,
    positionY: 0,
    mouseDown: false,
  });

  const [fontSize, setFontSize] = useState({
    type: 'Font',
    size: '10px',
  });

  const [image, setImage] = useState({
    type: 'Image',
    size: 70,
    image: null,
    positionX: 0,
    positionY: 0,
    mouseDown: false,
  });
  const [logo, setLogo] = useState({
    type: 'Logo',
    size: '20px',
    logo: null,
    positionX: 0,
    positionY: 0,
    mouseDown: false,
  });

  const [imgResult, setImgResult] = useState('');
  const [logoResult, setLogoResult] = useState('');

  const [designName, setDesignName] = useState('');

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setImgResult(reader.result);
    };
    if (image.image) reader.readAsDataURL(image.image);

    const logoReader = new FileReader();
    logoReader.onload = () => {
      setLogoResult(logoReader.result);
    };
    if (logo.image) logoReader.readAsDataURL(logo.image);
  }, [image, logo]);

  /* Handlers Functions */
  const onDoubleClick = (e, id) => {
    id === 'mainAreaText'
      ? setText({ ...text, mouseDown: true })
      : id === 'mainAreaImage'
      ? setImage({
          ...image,
          mouseDown: true,
        })
      : id === 'logoAreaImage' &&
        setLogo({
          ...logo,
          mouseDown: true,
        });
  };

  const onMouseUp = () => {
    setText({ ...text, mouseDown: false });
    setImage({ ...image, mouseDown: false });
    setLogo({ ...logo, mouseDown: false });
  };

  const onMouseMove = (e) => {
    if (text.mouseDown) {
      setText({
        ...text,
        positionX: e.nativeEvent.layerX,
        positionY: e.nativeEvent.layerY,
      });
    }
    if (image.mouseDown) {
      setImage({
        ...image,
        positionX: e.nativeEvent.layerX,
        positionY: e.nativeEvent.layerY,
      });
    }
    if (logo.mouseDown) {
      console.log(e);
      setLogo({
        ...logo,
        positionX: e.nativeEvent.layerX,
        positionY: e.nativeEvent.layerY,
      });
    }
  };

  const onColorChange = (e) => {
    if (param === 'hoody') {
      e.target.id === 'black' && setItemColor(black_hoody);
      e.target.id === 'blue' && setItemColor(blue_hoody);
      e.target.id === 'red' && setItemColor(red_hoody);
      e.target.id === 'green' && setItemColor(green_hoody);
    } else if (param === 't-shirt') {
      e.target.id === 'black' && setItemColor(black_shirt);
      e.target.id === 'blue' && setItemColor(blue_shirt);
      e.target.id === 'red' && setItemColor(red_shirt);
      e.target.id === 'green' && setItemColor(green_shirt);
    }
  };

  const onPreviewDesignClick = (e, plain) => {
    document.querySelector('.itemDiv').classList.toggle('prevMode');
    document.querySelector('.logoArea')?.classList.toggle('prevMode');
    document.querySelector('.mainArea').classList.toggle('prevMode');
    document.querySelector('.mainArea').classList.toggle('hidden');
    document.querySelector('.mainAreaText').classList.toggle('prevMode');
    document.querySelector('.mainAreaText').setAttribute('placeholder', '');

    if (plain) {
      document.querySelector('.itemDiv').style.backgroundColor = 'transparent';
      document.querySelector('.itemDiv').style.backgroundImage = '';
    }
    html2canvas(document.querySelector('.itemDiv')).then((canvas) => {
      document.querySelector('.design').innerHTML = '';
      document.querySelector('.design').appendChild(canvas);
      document.querySelector('.previewDesign').showModal();
    });
    document.querySelector('.itemDiv').classList.toggle('prevMode');
    document.querySelector('.logoArea')?.classList.toggle('prevMode');
    document.querySelector('.mainArea').classList.toggle('prevMode');
    document.querySelector('.mainArea').classList.toggle('hidden');
    document.querySelector('.mainAreaText').classList.toggle('prevMode');
    document
      .querySelector('.mainAreaText')
      .setAttribute('placeholder', 'Type your text here');
    if (plain) {
      document.querySelector('.itemDiv').style.backgroundColor = 'transparent';
      document.querySelector(
        '.itemDiv'
      ).style.backgroundImage = `url(${itemColor})`;
    }
  };

  /* handling save action by displaying a save dialog form for entering a design name, then save the design in the local storage */
  const onSave = (e) => {
    const saveModal = document.querySelector('.saveDialog');
    saveModal.showModal();
  };
  const onFinalSave = (e) => {
    e.preventDefault();
    document.querySelector('.itemDiv').classList.toggle('prevMode');
    document.querySelector('.logoArea')?.classList.toggle('prevMode');
    document.querySelector('.mainArea').classList.toggle('prevMode');
    document.querySelector('.mainAreaText').classList.toggle('prevMode');
    document.querySelector('.mainArea').classList.toggle('hidden');
    document.querySelector('.mainAreaText').setAttribute('placeholder', '');

    html2canvas(document.querySelector('.itemDiv')).then((canvas) => {
      let currentDesigns =
        JSON.parse(localStorage.getItem('designs')) == null
          ? []
          : JSON.parse(localStorage.getItem('designs'));

      try {
        currentDesigns.push([
          designName,
          canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream'),
        ]);
        console.log(currentDesigns);
        localStorage.setItem('designs', JSON.stringify(currentDesigns));
        toast.success('Design saved', {
          toastId: 'success1',
        });
        navigate('/Design');
        return;
      } catch (error) {
        console.log(error.message);
      }
    });
  };

  return (
    <div className="costume">
      <div className="sideBar">
        {/* Side bar */}
        <form className="sideBarForm">
          {/* mpaing thorugh text features of Select and options (font type and size) */}
          {textFeatures.map((label) => (
            <Select
              id={label.id}
              label={label}
              key={label.id}
              setTextFeatures={setTextFeatures}
            />
          ))}
          {/* Text font size  */}
          <Input fontSize={fontSize} setFontSize={setFontSize} />
          {/* image file input */}
          <ImageInput image={image} setImage={setImage} />
          {/* Logo file input */}
          {param === 'cup' || <ImageInput image={logo} setImage={setLogo} />}
        </form>
      </div>

      {/* item and item design area */}
      <div className="itemDivFlex">
        <div
          className="itemDiv"
          style={{ backgroundImage: `url(${itemColor})` }}
        >
          {/* Item Logo area */}
          {param === 'cup' || (
            <header
              className={
                param === 't-shirt'
                  ? 'LogoShirtMode logoArea'
                  : param === 'hoody'
                  ? 'logoArea'
                  : param === 'cup' && 'LogoCupMode logoArea'
              }
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <img
                className="logoAreaImage"
                id="logoAreaImage"
                src={logoResult}
                alt=""
                style={{
                  width: `${logo.size}px`,
                  top: `${logo.positionY}px`,
                  left: `${logo.positionX}px`,
                }}
                onDoubleClick={(e) => onDoubleClick(e, e.target.id)}
              />
            </header>
          )}

          {/* Item main design area */}

          <main
            className={
              param === 't-shirt'
                ? 'mainShirtMode mainArea'
                : param === 'hoody'
                ? 'mainArea'
                : param === 'cup' && 'mainCupMode mainArea'
            }
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {text.textToggle && (
              <div>
                <textarea
                  type="text"
                  id="mainAreaText"
                  value={text.text}
                  className="mainAreaText"
                  onDoubleClick={(e) => onDoubleClick(e, e.target.id)}
                  onMouseUp={onMouseUp}
                  onChange={(e) => setText({ ...text, text: e.target.value })}
                  placeholder="Type your text here"
                  style={{
                    top: `${text.positionY}px`,
                    left: `${text.positionX}px`,
                    fontFamily: textFeatures[0].selected,
                    color: textFeatures[1].selected,
                    fontSize: `${fontSize.size}px`,
                  }}
                ></textarea>
              </div>
            )}
            <img
              className="mainAreaImage"
              id="mainAreaImage"
              src={imgResult}
              alt=""
              style={{
                width: `${image.size}px`,
                top: `${image.positionY}px`,
                left: `${image.positionX}px`,
              }}
              onDoubleClick={(e) => onDoubleClick(e, e.target.id)}
            />
          </main>
          {param === 'cup' || (
            <div className="colorsDiv">
              <i
                className="colorCircle"
                id="black"
                style={{ background: 'black' }}
                onClick={onColorChange}
              ></i>
              <i
                className="colorCircle"
                id="blue"
                style={{ background: 'blue' }}
                onClick={onColorChange}
              ></i>
              <i
                className="colorCircle"
                id="red"
                style={{ background: 'red' }}
                onClick={onColorChange}
              ></i>
              <i
                className="colorCircle"
                id="green"
                style={{ background: 'green' }}
                onClick={onColorChange}
              ></i>
            </div>
          )}
        </div>
        <ul className="instructions">
          <li className="instructionsItem">
            Double clikck to move the text feild or an Image. And, click to
            release.
          </li>
          <li className="instructionsItem">
            Any part of a text or image that is outside the white box will be
            neglected.
          </li>
        </ul>
        <dialog className="previewDesign">
          <div className="design"></div>
          <button onClick={(e) => e.target.parentElement.close()}>Close</button>
        </dialog>

        <button
          className="previwButton"
          onClick={(e) => onPreviewDesignClick(e, false)}
        >
          Preview {param[0].toUpperCase() + param.slice(1)} Design
        </button>
        <button
          className="previwButton"
          onClick={(e) => onPreviewDesignClick(e, true)}
        >
          Preview Design
        </button>

        {/* Saving dailog / form */}
        <dialog className="saveDialog">
          <div className="saveDialogDeisgn">
            <form className="saveForm" onSubmit={onFinalSave}>
              <label htmlFor="desginName">Design Name</label>
              <input
                type="text"
                id="desginName"
                placeholder="Enter a design name..."
                value={designName}
                maxLength="20"
                required
                onChange={(e) => setDesignName(e.target.value)}
              />
              <div className="dialogbtns">
                <button
                  className="cnacelBtn"
                  onClick={(e) => {
                    const saveModal = document.querySelector('.saveDialog');
                    saveModal.close();
                  }}
                >
                  Cnacel
                </button>
                <button className="saveBtn" onMouseUp={onFinalSave}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
        <button className="saveButton" onClick={onSave}>
          Save Design
        </button>
      </div>
      <ConfirmPageLeave isActive={true} history={history} />
    </div>
  );
}
export default Costume;
