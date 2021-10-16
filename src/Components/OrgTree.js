import React from 'react';
import Data from '../data.json'
import { Tree, TreeNode } from 'react-organizational-chart';

const OrgTree = () => {
    return(
        <div className="wrapper">
            <Tree
                label={<p className="text">{Data[0].Organization.VP}</p>}
                className="treeStyle"
                lineBorderRadius="10px"
                lineColor="Orange"
                lineHeight="50px"
                lineWidth="5px"
                nodePadding="1.5rem"
            >

                <TreeNode label={<p className="text">{Data[0].Organization.Team1.Manager}</p>}>
                    <TreeNode label={<p className="text">{Data[0].Organization.Team1.NorthAmerica.Country.Canada.Lead}</p>}>
                        <TreeNode label={<p className="text">{Data[0].Organization.Team1.NorthAmerica.Country.Canada.Cities.Toronto.Rep}</p>} />
                        <TreeNode label={<p className="text">{Data[0].Organization.Team1.NorthAmerica.Country.Canada.Cities.Vancouver.Rep}</p>} />
                    </TreeNode>
                    <TreeNode label={<p className="text">{Data[0].Organization.Team1.NorthAmerica.Country.US.Lead}</p>}>
                        <TreeNode label={<p className="text">{Data[0].Organization.Team1.NorthAmerica.Country.US.Cities.LA.Rep}</p>} />
                        <TreeNode label={<p className="text">{Data[0].Organization.Team1.NorthAmerica.Country.US.Cities.Dallas.Rep}</p>} />
                        <TreeNode label={<p className="text">{Data[0].Organization.Team1.NorthAmerica.Country.US.Cities.NY.Rep}</p>} />
                    </TreeNode>
                </TreeNode>

                <TreeNode label={<p className="text">{Data[0].Organization.Team2.Manager}</p>}>
                    <TreeNode label={<p className="text">{Data[0].Organization.Team2.Europe.Country.Germany.Lead}</p>}>
                        <TreeNode label={<p className="text">{Data[0].Organization.Team2.Europe.Country.Germany.Cities.Berlin.Rep}</p>} />
                        <TreeNode label={<p className="text">{Data[0].Organization.Team2.Europe.Country.Germany.Cities.Frankfurt.Rep}</p>} />
                    </TreeNode>
                    <TreeNode label={<p className="text">{Data[0].Organization.Team2.Europe.Country.Italy.Lead}</p>}>
                        <TreeNode label={<p className="text">{Data[0].Organization.Team2.Europe.Country.Italy.Cities.Milan.Rep}</p>} />
                    </TreeNode>
                </TreeNode>
            </Tree>
        </div>
    )
}

export default OrgTree;