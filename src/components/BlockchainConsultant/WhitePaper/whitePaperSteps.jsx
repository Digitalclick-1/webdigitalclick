import React from 'react'
import ReactSimpleTooltip from "react-simple-tooltip"
const StepTable = () =>
{
    return(
        <div className="d-flex align-items-center ">
        <div className=" mx-auto" style={{width:'420px', height:'410px'}}>
            <div className="d-flex align-items-center">
                <div id="talkbubble-right" className="d-flex align-items-center">
                    <div className="mx-auto d-flex align-items-center" style={{width:'50px', height:'50px', borderRadius:'50%', background:'linear-gradient(to left,#2593C5,#000000)' }}>
                        <img className="mx-auto" style={{width:'48%', height:'49%'}} src='assets/img/economic-table/1.png' />
                    </div>
                </div>
                <div className="" style={{width:'100%', marginLeft:"-70px", borderRadius:'50px', background:'linear-gradient(to right,#2593C5,#000000)' }}>
                    <h6 style={{paddingLeft:'90px', marginTop:'0.5rem', marginBottom:'0', color:'#F3982B'}}>Total Supply</h6>
                    <p style={{paddingLeft:'90px', color:'white', marginBottom:'0.5rem'}}>
                        105 Millions Tokens (105,000,000)
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center"style={{marginTop:'-15px'}}>
                <div className="" style={{width:'100%', marginRight:"-70px", borderRadius:'50px', background:'linear-gradient(to left,#2593C5,#000000)' }}>
                    <h6 style={{paddingLeft:'100px', marginTop:'0.5rem', marginBottom:'0', color:'#F3982B'}}>Block Time</h6>
                    <p style={{paddingLeft:'100px', color:'white', marginBottom:'0.5rem'}}>
                        3 Minutes
                    </p>
                </div>
                <div id="talkbubble" className="d-flex align-items-center">
                    <div className="mx-auto d-flex align-items-center" style={{width:'50px', height:'50px', borderRadius:'50%', background:'linear-gradient(to right,#2593C5,#000000)' }}>
                        <img className="mx-auto" style={{width:'44%', height:'53%'}} src='assets/img/economic-table/2.png' />
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center" style={{marginTop:'-15px'}}>
                <div id="talkbubble-right" className="d-flex align-items-center">
                    <div className="mx-auto d-flex align-items-center" style={{width:'50px', height:'50px', borderRadius:'50%', background:'linear-gradient(to left,#2593C5,#000000)' }}>
                        <img className="mx-auto" style={{width:'44%', height:'52%'}} src='assets/img/economic-table/3.png' />
                    </div>
                </div>
                <div className="" style={{width:'100%', marginLeft:"-70px", borderRadius:'50px', background:'linear-gradient(to right,#2593C5,#000000)' }}>
                    <h6 style={{paddingLeft:'90px', marginTop:'0.5rem', marginBottom:'0', color:'#F3982B'}}>Initial Block Size</h6>
                    <p style={{paddingLeft:'90px', color:'white', marginBottom:'0.5rem'}}>
                        2MB Block Size, Reward is 75 QTC / Block
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center" style={{marginTop:'-15px'}}>
                <div className="" style={{paddingLeft:'100px',width:'100%', marginRight:"-70px", borderRadius:'50px', background:'linear-gradient(to left,#2593C5,#000000)' }}>
                    <h6 style={{ marginTop:'0.5rem', marginBottom:'0', color:'#F3982B'}}>Halving Cycle</h6>
                    <ReactSimpleTooltip
                        arrow={0}
                        background="linear-gradient(#2593C5,#000000)"
                        border="#000"
                        color="#fff"
                        content={`The first halving time is 420,000
block height, and will be halved
every 700,000 blocks later.`}
                        fadeDuration={0}
                        fadeEasing="linear"
                        fixed={false}
                        fontFamily="inherit"
                        fontSize="inherit"
                        offset={0}
                        padding={16}
                        placement="top"
                        radius={0}
                        zIndex={1}
                        style={{whiteSpace:'pre'}}
                        >
                        <ReactSimpleTooltip style={{ color:'white', marginBottom:'0.5rem'}}>
                        The first halving time <span style={{ color:'orange', cursor:'pointer'}}>read more...</span>
                        </ReactSimpleTooltip>
                    </ReactSimpleTooltip>
                </div>
                <div id="talkbubble" className="d-flex align-items-center">
                    <div className="mx-auto d-flex align-items-center" style={{width:'50px', height:'50px', borderRadius:'50%', background:'linear-gradient(to right,#2593C5,#000000)' }}>
                        <img className="mx-auto" style={{width:'49%', height:'49%'}} src='assets/img/economic-table/4.png' />
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center" style={{marginTop:'-15px'}}>
                <div id="talkbubble-right" className="d-flex align-items-center">
                    <div className="mx-auto d-flex align-items-center" style={{width:'50px', height:'50px', borderRadius:'50%', background:'linear-gradient(to left,#2593C5,#000000)' }}>
                        <img className="mx-auto" style={{width:'46%', height:'33%'}} src='assets/img/economic-table/5.png' />
                    </div>
                </div>
                <div className="" style={{width:'100%', marginLeft:"-70px", borderRadius:'50px', background:'linear-gradient(to right,#2593C5,#000000)' }}>
                    <h6 style={{paddingLeft:'90px', marginTop:'0.5rem', marginBottom:'0', color:'#F3982B'}}>Initial Transaction Per Second (TPS)</h6>
                    <p style={{paddingLeft:'90px', color:'white', marginBottom:'0.5rem'}}>
                        70 Transaction Per Second
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center" style={{marginTop:'-15px'}}>
                <div className="" style={{paddingLeft:'100px',width:'100%', marginRight:"-70px", borderRadius:'50px', background:'linear-gradient(to left,#2593C5,#000000)' }}>
                    <h6 style={{ marginTop:'0.5rem', marginBottom:'0', color:'#F3982B'}}>Pledge Period</h6>
                    <ReactSimpleTooltip
                        arrow={0}
                        background="linear-gradient(#2593C5,#000000)"
                        border="#000"
                        color="#fff"
                        content={`A Pledge Period of 360 Days Requires
10QTC/T, and a Pledge Period of 540
Days Requires 5QTC/T. The pledge
demand halving is synchronized with
the block halving period.`}
                        fadeDuration={0}
                        fadeEasing="linear"
                        fixed={false}
                        fontFamily="inherit"
                        fontSize="inherit"
                        offset={0}
                        padding={16}
                        placement="top"
                        radius={0}
                        zIndex={1}
                        style={{whiteSpace:'pre'}}
                        >
                        <ReactSimpleTooltip style={{ color:'white', marginBottom:'0.5rem'}}>
                        A Pledge Period of <span style={{ color:'orange',cursor:'pointer'}}>read more...</span>
                        </ReactSimpleTooltip>
                    </ReactSimpleTooltip>
                </div>
                <div id="talkbubble" className="d-flex align-items-center">
                    <div className="mx-auto d-flex align-items-center" style={{width:'50px', height:'50px', borderRadius:'50%', background:'linear-gradient(to right,#2593C5,#000000)' }}>
                        <img className="mx-auto" style={{width:'53%', height:'64%'}} src='assets/img/economic-table/6.png' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default StepTable;