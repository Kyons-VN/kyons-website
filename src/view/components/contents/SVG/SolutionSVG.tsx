import { activeMenu, activeSolution, isInSolution } from '@application/app';
import { useStore } from '@nanostores/preact';
import { Component } from 'preact';
import { StateUpdater, useState } from 'preact/hooks';
import { LearningPathSVG } from './files/LearningPathSVG';
import { MockTestSVG } from './files/MockTestSVG';
import './style.scss';

enum SvgFile {
  MockTest,
  LearningPath,
  Tutor,
}

type Props = {
  l: string;
  file: SvgFile;
  size: [number, number];
};

class SolutionSVG extends Component<Props> {
  setClassName: StateUpdater<string>;
  isInSolution: boolean;
  activeMenu: number;
  activeSolution: number;
  componentDidMount() {
    activeSolution.subscribe((value) => {
      this.activeSolution = value;

      // if (this.isInSolution && value == 0) {
      // setTimeout(() => {
      // this.setClassName('start in');
      // }, 1000);
      // }
    });
    isInSolution.subscribe((value) => {
      if (this.activeSolution == this.props.file && value) {
        this.setClassName('start in');
      } else {
        if (!value || (value && this.activeSolution != this.props.file)) this.setClassName('start');
      }
    });
  }
  render(props: Props) {
    this.isInSolution = useStore(isInSolution);
    this.activeMenu = useStore(activeMenu);
    this.activeSolution = useStore(activeSolution);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [className, setClassName] = useState('start');
    this.setClassName = setClassName;
    let minX = 0;
    let minY = 0;
    const svgOriginalWidth = props.size[0];
    const svgOriginalHeight = props.size[1];
    const svgOriginRatio = svgOriginalWidth / svgOriginalHeight;
    const [viewBox, setViewBox] = useState(`${minX} ${minY} ${svgOriginalWidth} ${svgOriginalHeight}`);

    // setWidth((_)=>interactiveLayer.offsetWidth);
    // setHeight((_)=>interactiveLayer.offsetHeight);
    // const viewBox = `${minX} ${minY} ${svgOriginalWidth} ${svgOriginalHeight}`;

    const updateViewport = () => {
      const interactiveLayer = document.getElementById('interactive-layer');
      console.log('run', interactiveLayer.offsetWidth);
      // setWidth(interactiveLayer.offsetWidth);
      // setHeight(interactiveLayer.offsetHeight);
      // console.log(width, height);

      if (document.body.offsetWidth >= 768) {
        if (interactiveLayer.offsetWidth / interactiveLayer.offsetHeight >= svgOriginRatio) {
          console.log('horizontal');
          setWidth(interactiveLayer.offsetWidth);
          setHeight(0);
          minX = 0;
          minY = interactiveLayer.offsetWidth / svgOriginRatio - interactiveLayer.offsetHeight;
        } else {
          //   const newWidth = interactiveLayer.offsetHeight * svgOriginRatio;
          //   const gap = width - newWidth;
          //   // width = newWidth;
          console.log('vertical');
          setHeight(interactiveLayer.offsetHeight);
          setWidth(0);
          minY = 0;
          minX = ((interactiveLayer.offsetHeight * svgOriginRatio - interactiveLayer.offsetWidth) / 2) * svgOriginRatio;
        }
      } else {
      }
      setViewBox(`${minX} ${minY} ${svgOriginalWidth} ${svgOriginalHeight}`);
    };

    // useEffect(() => {
    //   if ($activeSolution == 0) {
    //     setTimeout(() => {
    //       setClassName('start in');
    //     }, 2000);
    //   }
    // }, []);
    return (
      <div class='flex w-full justify-center'>
        {props.file == SvgFile.MockTest && (
          <MockTestSVG l={props.l} class={className} size={props.size} viewBox={viewBox} />
        )}
        {props.file == SvgFile.LearningPath && (
          <LearningPathSVG l={props.l} class={className} size={props.size} viewBox={viewBox} />
        )}
      </div>
    );
  }
}

export { SvgFile, SolutionSVG };
