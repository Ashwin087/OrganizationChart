import React from 'react';
import Data from '../data.json'
import { Tree, TreeNode } from 'react-organizational-chart';
import Conditional from './Conditional'

const OrgTree = () => {
    return(
        <div className="wrapper"> 
            <Tree
                label={<Conditional path={Data[0].Organization} />}
                className="treeStyle"
                lineBorderRadius="10px"
                lineColor="Orange"
                lineHeight="50px"
                lineWidth="5px"
                nodePadding="1.5rem"
            >
                <TreeNode label={<Conditional path={Data[0].Organization.Teams.Team1} />} >
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
                </TreeNode>
            </Tree>
        </div>
    )
}

export default OrgTree;