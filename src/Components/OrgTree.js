import React from 'react';
import Data from '../data.json'
import { Tree, TreeNode } from 'react-organizational-chart';
import Conditional from './Conditional'

const OrgTree = () => {
    return(
        <div className="wrapper"> 
                {
                    Object.keys(Data[0]).map((item) => {
                        return <Tree label={<Conditional path={Data[0][item]} />} className="treeStyle" lineBorderRadius="10px" lineColor="Orange" lineHeight="50px" lineWidth="5px" nodePadding="1.5rem" >
                            {
                                Data[0][item].Teams
                                ? Object.keys(Data[0][item].Teams).map( (item2) => {
                                    return <TreeNode label={<Conditional path={Data[0][item].Teams[item2]} />}> 
                                    {
                                        Data[0][item].Teams[item2].Teams
                                        ? Object.keys(Data[0][item].Teams[item2].Teams).map((item3) => {
                                            return <TreeNode label={<Conditional path={Data[0][item].Teams[item2].Teams[item3]} />}>  
                                                {
                                                    Data[0][item].Teams[item2].Teams[item3].Teams
                                                    ? Object.keys(Data[0][item].Teams[item2].Teams[item3].Teams).map((item4) => {
                                                        return <TreeNode label={<Conditional path={Data[0][item].Teams[item2].Teams[item3].Teams[item4]} />}>  </TreeNode>
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



{/* <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1} />} >
                    <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team1} />}>
                        <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team1.Teams.Team1} />} />
                        <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team1.Teams.Team2} />} />
                    </TreeNode>
                    <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team2} />}>
                        <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team2.Teams.Team1} />} />
                        <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team2.Teams.Team2} />} />
                        <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1.Teams.Team2.Teams.Team3} />} />
                    </TreeNode>
                </TreeNode>

                <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2} />}>
                    <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team1} />}>
                        <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team1.Teams.Team1} />} />
                        <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team1.Teams.Team2} />} />
                    </TreeNode>
                    <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team2} />}>
                        <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team2.Teams.Team2.Teams.Team1} />} />
                    </TreeNode>
                </TreeNode> */}


                // remove extra orange line
                // figure out why items break past wrapper
                