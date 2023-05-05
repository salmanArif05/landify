import React from 'react';
import './style.css';
import { StoryCard } from '../../components';

const Story = () => {
    return (
        <>
            <div className="story">
                <div className="container">
                    <div className="row mx-0 justify-content-center">
                        <div className="col-lg-11">
                            <div className="row mx-0">
                                <div className="col-lg-6">
                                    <div className="fs-48 fw-800 primaryBlack">Real Stories from Real Customers</div>
                                    <div className="fs-18 fw-400 primaryBlack mb-3">Get inspired by these stories.</div>
                                    <div className="col-lg-10 ms-auto">
                                        <StoryCard />
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-lg-5">
                                    <div className="mb-32">
                                        <StoryCard />
                                    </div>
                                    <div className="col-lg-10 me-auto">
                                        <StoryCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Story
