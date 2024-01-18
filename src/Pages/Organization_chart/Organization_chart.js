import "./Organization_chart.css";
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import ceo from '../../Images/ceo.png';
import directer1 from '../../Images/directer1.png';
import directer2 from '../../Images/directer2.png';



const StyledNode = styled.div`
  // padding-right: 4px;
  // padding-left: 4px;
  // padding-top: 2px;
  // padding-button: 2px;
  // border-radius: 0px;
  display: inline-block;
  //border: 1px solid #6593F5;
  width:150px;
  
`;

const Organization_chart = () => (
<div className="main 100vh">
  <div className="container">
  <h4 className="mt-5">Company Name</h4>
  <div className="chart-body mt-5">
  <Tree
    className="Tree-chart"
    lineWidth={'2px'}
    lineColor={'#646464'}
    lineBorderRadius={'0px'}
    label={<StyledNode><img className="position-img" id="ceo" src={ceo} alt="ceo"/> <div className="position-details"><h4 className="text fw-bold m-0">CEO</h4><p className="text m-0">Mr. Vithanage</p></div></StyledNode>}
  >
    <TreeNode label={<StyledNode><img className="position-img" src={directer1} alt="directer1"/> <div className="position-details"><h4 className="text fw-bold m-0">Director 1</h4><p className="text m-0">Ms. Perera</p></div></StyledNode>}>
      <TreeNode label={<StyledNode><img className="position-img" src={directer2} alt="Department 1 head"/> <div className="position-details"><h4 className="text fw-bold m-0">Department 1 head</h4><p className="text m-0">Mr. Mickey</p></div></StyledNode>}>
        <TreeNode label={<StyledNode><img className="position-img" src={directer1} alt="Sub Department head1"/> <div className="position-details"><h4 className="text fw-bold m-0">Sub Department head1</h4><p className="text m-0">Ms. Percy</p></div></StyledNode>}>
            <TreeNode label={<StyledNode><img className="position-img" src={directer2} alt="Job Role"/> <div className="position-details"><h4 className="text fw-bold m-0">Job Role</h4><p className="text m-0">Mr. Markes</p></div></StyledNode>}/>
        </TreeNode>
        <TreeNode label={<StyledNode><img className="position-img" src={directer2} alt="Sub Department head2"/> <div className="position-details"><h4 className="text fw-bold m-0">Sub Department head2</h4><p className="text m-0">Mr. Jonathan</p> </div> </StyledNode>}>
            <TreeNode label={<StyledNode><img className="position-img" src={directer1} alt=""/> <div className="position-details"><h4 className="text fw-bold m-0">Job Role</h4><p className="text m-0">Ms. Hannah</p> </div> </StyledNode>}/>
        </TreeNode>
      </TreeNode>
    </TreeNode>
    <TreeNode label={<StyledNode> <img className="position-img" src={directer2} alt="directer2"/> <div className="position-details"> <h4 className="text fw-bold m-0">Director 2</h4><p className="text m-0">Mr. Vithanage</p> </div> </StyledNode>}>
        <TreeNode label={<StyledNode> <img className="position-img" src={directer1} alt="Department2 head"/> <div className="position-details"> <h4 className="text fw-bold m-0">Department2 head</h4><p className="text m-0">Ms. Perera</p> </div> </StyledNode>}>
          <TreeNode label={<StyledNode> <img className="position-img" src={directer2} alt="Sub Department head1"/> <div className="position-details"> <h4 className="text fw-bold m-0">Sub Department head1</h4><p className="text m-0">Mr. Vithana</p> </div> </StyledNode>}>
            <TreeNode label={<StyledNode> <img className="position-img" src={directer1} alt="Job Role"/> <div className="position-details"> <h4 className="text fw-bold m-0">Job Role</h4><p className="text m-0">Ms. Juli</p> </div> </StyledNode>}/>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode> <img className="position-img" src={directer2} alt="Department3 head"/> <div className="position-details"> <h4 className="text fw-bold m-0">Department3 head</h4><p className="text m-0">Mr. Steaven</p> </div> </StyledNode>}>
          <TreeNode label={<StyledNode> <img className="position-img" src={directer1} alt="Sub Department head1"/> <div className="position-details"> <h4 className="text fw-bold m-0">Sub Department head1</h4><p className="text m-0">Ms. Stella</p> </div> </StyledNode>}>
            <TreeNode label={<StyledNode> <img className="position-img" src={directer2} alt="Job Role"/> <div className="position-details"> <h4 className="text fw-bold m-0">Job Role</h4><p className="text m-0">Mr. Jhosep</p> </div> </StyledNode>}/>
            <TreeNode label={<StyledNode> <img className="position-img" src={directer1} alt="Job Role"/> <div className="position-details"> <h4 className="text fw-bold m-0">Job Role</h4><p className="text m-0">Ms. Ruchei</p> </div> </StyledNode>}/>
          </TreeNode>
        </TreeNode>
    </TreeNode>

    {/* <TreeNode label={<StyledNode>Grand Child</StyledNode>}></TreeNode> */}
    {/* <TreeNode label={<StyledNode>Child 3</StyledNode>}>
      <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
      <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
    </TreeNode> */}
  </Tree>
  </div>
  </div>
  </div>
);

export default Organization_chart;