import React from 'react';
import Data from '../data.json'
import { Tree, TreeNode } from 'react-organizational-chart';
import Conditional from './Conditional'

const OrgTree = () => {
    return(
        <div className="wrapper"> 
                {
                    Object.keys(Data[0]).map((vp) => {
                        return <Tree label={<Conditional path={Data[0][vp]} />} className="treeStyle" lineBorderRadius="10px" lineColor="Orange" lineHeight="50px" lineWidth="5px" nodePadding="1.5rem" key={Data[0][vp]}>
                            {
                                Data[0][vp].Teams
                                    ? Object.keys(Data[0][vp].Teams).map( (manager) => {
                                        return <TreeNode label={<Conditional path={Data[0][vp].Teams[manager]} key={Data[0][vp].Teams[manager]} />}>
                                    {
                                        Data[0][vp].Teams[manager].Teams
                                            ? Object.keys(Data[0][vp].Teams[manager].Teams).map((leads) => {
                                                return <TreeNode label={<Conditional path={Data[0][vp].Teams[manager].Teams[leads]} key={Data[0][vp].Teams[manager].Teams[leads]} />}>
                                            {
                                                Data[0][vp].Teams[manager].Teams[leads].Teams
                                                    ? Object.keys(Data[0][vp].Teams[manager].Teams[leads].Teams).map((reps) => {
                                                        return <TreeNode label={<Conditional path={Data[0][vp].Teams[manager].Teams[leads].Teams[reps]} key={Data[0][vp].Teams[manager].Teams[leads].Teams[reps]}/>}>  </TreeNode>
                                                    })
                                                    : null
                                                }
                                            </TreeNode>
                                        })
                                        : null
                                    }
                                    </TreeNode>
                                })
                                : null
                            }
                        </Tree>
                    })
                }
        </div>
    )
}

export default OrgTree;



    // Iteration/Diagram 1
    // <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1} />} >
    //     <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team1} />}>
    //         <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team1.Teams.Team1} />} />
    //         <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team1.Teams.Team2} />} />
    //     </TreeNode>
    //     <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team2} />}>
    //         <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team2.Teams.Team1} />} />
    //         <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team2.Teams.Team2} />} />
    //         <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team2.Teams.Team3} />} />
    //     </TreeNode>
    // </TreeNode>

    // <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2} />}>
    //     <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team1} />}>
    //         <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team1.Teams.Team1} />} />
    //         <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team1.Teams.Team2} />} />
    //     </TreeNode>
    //     <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team2} />}>
    //         <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team2.Teams.Team1} />} />
    //     </TreeNode>
    // </TreeNode>

    // Iteration/Diagram 2
        // Object.keys(Data[0]).map( (item) => {
    //     console.log(Data[0][item].Title);
    //     if(Data[0][item].Teams){
    //         Object.keys(Data[0][item].Teams).map( (item2) => {
    //             console.log(Data[0][item].Teams[item2].Title);
    //             if (Data[0][item].Teams[item2].Teams){
    //                 Object.keys(Data[0][item].Teams[item2].Teams).map( (item3) => {
    //                     console.log(Data[0][item].Teams[item2].Teams[item3].Title);
    //                     if (Data[0][item].Teams[item2].Teams[item3].Teams){
    //                         Object.keys(Data[0][item].Teams[item2].Teams[item3].Teams).map( (item4) => {
    //                             console.log(Data[0][item].Teams[item2].Teams[item3].Teams[item4].Title);
    //                         })
    //                     }
    //                 })
    //             }
    //         })
    //     }
    // })
