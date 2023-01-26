import "./App.css";
import React, { useEffect, useState } from "react";
import styles from "./Contents.module.css";
import { Chart,registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import {
  IoCalculatorSharp,
  IoFlashSharp,
  IoSettingsSharp,
} from "react-icons/io5";
import { RiFileUploadFill } from "react-icons/ri";
import { MdOutlineFilePresent } from "react-icons/md";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { Range, getTrackBackground } from "react-range";
import { OrModel} from './model/OrModel';
Chart.register(...registerables);
//모델로 옮길거
export default function Contents(props) {
  let chartReference = React.createRef();
  function openAttachment() {
    document.getElementById("attachment").click();
  }

  async function fileSelected(input) {
    const files=input.target.files;
    for (let index = 0; index < files.length; index++) {

      let file = files[index];
setSelectedFiles([...selectedFiles,file.name]);

      let readFile = (file) =>
        new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.onload = (e) => resolve(reader.result);
  
          reader.readAsText(file);
        });
  
      let csvText = await readFile(file);
      console.log(csvText);
    }
    console.log(selectedFiles);
   
  }

  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = useState([25, 75]);
  const [isMaxLeft, setIsMaxLeft] = useState(false);
  const [isMaxRight, setIsMaxRight] = useState(false);
  const [isOrPopup, setIsOrPopup] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isFileListPopup, setIsFileListPopup] = useState(false);
  const [searchedOrVi, setSearchedOrVi] = useState("");
  const [searchedFileName, setSearchedFileName] = useState("");
  const [xDatas, setXdatas] = useState([1, 4, 6, 7, 8, 9, 10]);
  const [yDatas, setYdatas] = useState([1, 4, 6, 7, 8, 9, 10]);
  const [dataset, setDataset] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: xDatas,
      },
    ],
  });
  useEffect(() => {
    setDataset({
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: xDatas,
        },
      ],
    });
  }, [xDatas, yDatas]);

  const options = {
    maintainAspectRatio: false,

    scales: {
      x: {
        display: true,

        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  function updateConfigAsNewObject(chart) {
    chart.data.datasets[0].data = [1];
    chart.update();
  }
  // const orCardsModels=new Or();
  // console.log(orCardsModels);
  const orCards = [
    
    { name: "OR 1", start: "500", end: "700" },
    { name: "OR 2", start: "500", end: "700" },
    { name: "OR 3", start: "500", end: "700" },
    { name: "OR 4", start: "500", end: "11" },
    { name: "OR 5", start: "500", end: "700" },
    { name: "OR 6", start: "500", end: "700" },
    { name: "OR 7", start: "500", end: "700" },
    { name: "OR 8", start: "900", end: "700" },
    { name: "OR 9", start: "500", end: "700" },
    { name: "OR 10", start: "500", end: "700" },
    { name: "OR 11", start: "500", end: "700" },
    { name: "OR 12", start: "500", end: "700" },
    { name: "OR 13", start: "500", end: "700" },
    { name: "OR 14", start: "500", end: "700" },
    { name: "OR 15", start: "500", end: "700" },
  ];

  const fileCards = [
    { fileName: "파일임", value: "200" },
    { fileName: "파일임2", value: "20430" },
    { fileName: "파일임3", value: "2040" },
    { fileName: "파일임4", value: "203420" },
    { fileName: "파일임5", value: "204320" },
    { fileName: "파일임434", value: "2040" },
    { fileName: "파일임234", value: "204320" },
    { fileName: "파일임234", value: "2020" },
    { fileName: "파일임23", value: "2020" },
    { fileName: "파일임3", value: "1200" },
  ];
  return (
    <div className={styles.Contents}>
      {isFileListPopup && (
        <div className="popupBg orPopup">
          <div className="filePopupTitle">
            <ul>
              <li><input type="checkbox" name="" id="" /></li>
              <li>NUM</li>
              <li>Files</li>
              <li><input type="search" name="" id="" /></li>
            </ul>
          </div>
          <ul className="files">
           {selectedFiles.map((file, index) => (<li>{file}</li>))}
          </ul>
        </div>
      )} 
      {isOrPopup && (
        <div className="popupBg orPopup">
          <div className="orPopupTitle">OES PARAMETER</div>
          <ul className="rangeSliders">
            <li>
              <div className="rangeTitle">
                OR 1 <div className="sizedbox" style={{ width: "10px" }}></div>
                <select name="elements" id="element-select">
                  <option value="">NO SELECTED</option>
                  <option value="O2">O2</option>
                </select>
              </div>
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                rtl={false}
                onChange={(values) => {
                  setValues(values);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "36px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#ccc", "#548BF4", "#ccc"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "4px",
                      backgroundColor: "#FFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 6px #AAA",
                    }}
                  >
                    <div
                      style={{
                        height: "6px",
                        width: "6px",
                        backgroundColor: isDragged ? "#548BF4" : "#CCC",
                      }}
                    />
                  </div>
                )}
              />
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <div className={styles.plots}>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
                <div className="spacer"></div>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
              </div>
            </li>
            <li>
              <div className="rangeTitle">
                OR 1 <div className="sizedbox" style={{ width: "10px" }}></div>
                <select name="elements" id="element-select">
                  <option value="">NO SELECTED</option>
                  <option value="O2">O2</option>
                </select>
              </div>
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                rtl={false}
                onChange={(values) => {
                  setValues(values);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "36px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#ccc", "#548BF4", "#ccc"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "4px",
                      backgroundColor: "#FFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 6px #AAA",
                    }}
                  >
                    <div
                      style={{
                        height: "6px",
                        width: "6px",
                        backgroundColor: isDragged ? "#548BF4" : "#CCC",
                      }}
                    />
                  </div>
                )}
              />
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <div className={styles.plots}>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
                <div className="spacer"></div>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
              </div>
            </li>
            <li>
              <div className="rangeTitle">
                OR 1 <div className="sizedbox" style={{ width: "10px" }}></div>
                <select name="elements" id="element-select">
                  <option value="">NO SELECTED</option>
                  <option value="O2">O2</option>
                </select>
              </div>
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                rtl={false}
                onChange={(values) => {
                  setValues(values);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "36px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#ccc", "#548BF4", "#ccc"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "4px",
                      backgroundColor: "#FFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 6px #AAA",
                    }}
                  >
                    <div
                      style={{
                        height: "6px",
                        width: "6px",
                        backgroundColor: isDragged ? "#548BF4" : "#CCC",
                      }}
                    />
                  </div>
                )}
              />
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <div className={styles.plots}>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
                <div className="spacer"></div>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
              </div>
            </li>
            <li>
              <div className="rangeTitle">
                OR 1 <div className="sizedbox" style={{ width: "10px" }}></div>
                <select name="elements" id="element-select">
                  <option value="">NO SELECTED</option>
                  <option value="O2">O2</option>
                </select>
              </div>
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                rtl={false}
                onChange={(values) => {
                  setValues(values);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "36px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#ccc", "#548BF4", "#ccc"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "4px",
                      backgroundColor: "#FFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 6px #AAA",
                    }}
                  >
                    <div
                      style={{
                        height: "6px",
                        width: "6px",
                        backgroundColor: isDragged ? "#548BF4" : "#CCC",
                      }}
                    />
                  </div>
                )}
              />
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <div className={styles.plots}>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
                <div className="spacer"></div>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
              </div>
            </li>
            <li>
              <div className="rangeTitle">
                OR 1 <div className="sizedbox" style={{ width: "10px" }}></div>
                <select name="elements" id="element-select">
                  <option value="">NO SELECTED</option>
                  <option value="O2">O2</option>
                </select>
              </div>
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                rtl={false}
                onChange={(values) => {
                  setValues(values);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "36px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#ccc", "#548BF4", "#ccc"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "4px",
                      backgroundColor: "#FFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 6px #AAA",
                    }}
                  >
                    <div
                      style={{
                        height: "6px",
                        width: "6px",
                        backgroundColor: isDragged ? "#548BF4" : "#CCC",
                      }}
                    />
                  </div>
                )}
              />
              <div className="sizedbox" style={{ height: "6px" }}></div>
              <div className={styles.plots}>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
                <div className="spacer"></div>
                <div
                  className={styles.plotZone}
                  style={{ marginLeft: "0", marginRight: "0", width: "auto" }}
                >
                  <div className="minplusBtn">-</div>
                  <input type="text" onChange={() => {}} />
                  <div className="minplusBtn">+</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
      <div className={styles.bgCard}>
        {/* 윗부분(or/vi/time) */}
        <div className={styles.topZone}>
          <div className={styles.details}>
            <div className={styles.bigTitle}>
              OR/VI DETAILS
              <input
                type="text"
                placeholder="Search OR / VI"
                onChange={(v) => {
                  setSearchedOrVi(v.target.value);
                  console.log(searchedOrVi);
                }}
              />
            </div>

            <div className={styles.orScrollZone}>
              <ul className="cards">
                {searchedOrVi === ""
                  ? orCards.map((card, index) => (
                      <li key={index}>
                        <div className={styles.cardTitle}>
                          {card.name}
                          <div className="spacer"></div>
                          <div className={styles.eyeIcon}></div>
                        </div>
                        <div className={styles.idx}>
                          <div className={styles.idxTitle}>START</div>
                          <div className="spacer"></div>
                          {card.start}
                        </div>
                        <div className="spacer"></div>
                        <div
                          className={styles.idx}
                          style={{ paddingBottom: "10px" }}
                        >
                          <div className={styles.idxTitle}>END</div>
                          <div className="spacer"></div>
                          {card.end}
                        </div>
                      </li>
                    ))
                  : orCards
                      .filter(
                        (card, index) =>
                          card.name.includes(searchedOrVi) ||
                          card.start.includes(searchedOrVi) ||
                          card.end.includes(searchedOrVi)
                      )
                      .map((card, index) => (
                        <li key={index}>
                          <div className={styles.cardTitle}>
                            {card.name}
                            <div className="spacer"></div>
                            <div className={styles.eyeIcon}></div>
                          </div>
                          <div className={styles.idx}>
                            <div className={styles.idxTitle}>START</div>
                            <div className="spacer"></div>
                            {card.start}
                          </div>
                          <div className="spacer"></div>
                          <div
                            className={styles.idx}
                            style={{ paddingBottom: "10px" }}
                          >
                            <div className={styles.idxTitle}>END</div>
                            <div className="spacer"></div>
                            {card.end}
                          </div>
                        </li>
                      ))}
              </ul>
            </div>
          </div>
          <div
            className={styles.details}
            style={{ borderLeft: "2px solid #696969" }}
          >
            <div className={styles.bigTitle}>
              TIME DETAILS
              <input
                type="search"
                placeholder="Search FileName"
                onChange={(v) => {
                  setSearchedFileName(v.target.value);
                  console.log(searchedOrVi);
                }}
              />
            </div>
            <div className={styles.orScrollZone}>
              <ul className="cards">
                {searchedFileName === ""
                  ? fileCards.map((card, index) => (
                      <li key={index}>
                        <div className={styles.cardTitle}>
                          <div className={styles.colorChip}></div>
                          <div className="spacer"></div>
                          <div className={styles.eyeIcon}></div>
                        </div>
                        <div className={styles.filePath}>{card.fileName}</div>
                        <div className="spacer"></div>
                        <div className={styles.plotZone}>
                          {/* <div className="spacer"></div> */}
                          <div className="minplusBtn">-</div>
                          <input
                            type="text"
                            value={card.value}
                            onChange={() => {}}
                          />
                          <div className="minplusBtn">+</div>
                          {/* <div className="spacer"></div> */}
                        </div>
                      </li>
                    ))
                  : fileCards
                      .filter(
                        (card, index) =>
                          card.fileName.includes(searchedFileName) ||
                          card.value.includes(searchedFileName)
                      )
                      .map((card, index) => (
                        <li key={index}>
                          <div className={styles.cardTitle}>
                            <div className={styles.colorChip}></div>
                            <div className="spacer"></div>
                            <div className={styles.eyeIcon}></div>
                          </div>
                          <div className={styles.filePath}>{card.fileName}</div>
                          <div className="spacer"></div>
                          <div className={styles.plotZone}>
                            {/* <div className="spacer"></div> */}
                            <div className="minplusBtn">-</div>
                            <input
                              type="text"
                              value={card.value}
                              onChange={() => {}}
                            />
                            <div className="minplusBtn">+</div>
                            {/* <div className="spacer"></div> */}
                          </div>
                        </li>
                      ))}
              </ul>
            </div>
          </div>
        </div>
        {/* 아래구간(차트 두개) */}
        <div className={styles.bottomZone}>
          {isMaxRight ? (
            <div style={{ width: "0" }}></div>
          ) : (
            <div className={isMaxLeft ? styles.maxLayout : styles.charts}>
              <div className={styles.bigTitle}>
                OES/VI
                <button
                  className={styles.applyBtn}
                  onClick={() => {
                    setInterval(() => {
                      let chart = chartReference;
                      updateConfigAsNewObject(chart);
                    }, 100);
                  }}
                >
                  APPLY
                </button>
                <div className="spacer"></div>
                <button
                  className="circleBtn"
                  onClick={() => {
                    setIsOrPopup(true);
                  }}
                >
                  <IoFlashSharp />
                </button>
                <button className="circleBtn">
                  <IoSettingsSharp />
                </button>
                <button className="circleBtn">
                  <IoCalculatorSharp />
                </button>
                <input
                  type="file"
                  name=""
                  id="attachment"
                  style={{ display: "none" }}
                  onChange={fileSelected}
                  multiple
                />
                <button
                  className="circleBtn"
                  id="btnAttachment"
                  onClick={openAttachment}
                >
                  <RiFileUploadFill />
                </button>
                <button className="circleBtn" onClick={()=>{setIsFileListPopup(true)}}>
                  <MdOutlineFilePresent />
                </button>
                <div className="sizedbox" style={{ width: "10px" }}></div>
                <button
                  className="maxBtn"
                  onClick={() => {
                    setIsMaxLeft(!isMaxLeft);
                  }}
                >
                  {isMaxLeft ? <FiMinimize2 /> : <FiMaximize2 />}
                </button>
                <div className="sizedbox" style={{ width: "10px" }}></div>
              </div>
              <div className={styles.lineChart}>
                <Line data={dataset} options={options} redraw={true} />
              </div>
            </div>
          )}
          {isMaxLeft ? (
            <div style={{ width: "0" }}></div>
          ) : (
            <div
              className={isMaxRight ? styles.maxLayout : styles.charts}
              style={{ borderLeft: isMaxRight ? "none" : "2px solid #696969" }}
            >
              {/* <div className={styles.chart}> */}
              <div className={styles.bigTitle}>
                OES DETAIL
                <button className={styles.applyBtn}>APPLY</button>
                <div className="spacer"></div>
                <button className="circleBtn">
                  <MdOutlineFilePresent />
                </button>
                <div className="sizedbox" style={{ width: "10px" }}></div>
                <button
                  className="maxBtn"
                  onClick={() => {
                    setIsMaxRight(!isMaxRight);
                  }}
                >
                  {isMaxRight ? <FiMinimize2 /> : <FiMaximize2 />}
                </button>
                <div className="sizedbox" style={{ width: "10px" }}></div>
              </div>
              <div
                className={styles.lineChart}
                style={{ width: isMaxLeft ?? "0" }}
              >
                <Line data={dataset} options={options} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
