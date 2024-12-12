import React from "react";
import "./Skeleton.css";

const Skeleton = () => (
    // <div id="skeleton" className="skeleton-container">
    //     <div className="skeleton skeleton-text"></div>
    //     <div className="skeleton skeleton-box"></div>
    //     <div className="skeleton skeleton-text"></div>
    //     <div className="skeleton skeleton-box"></div>
    //     <div className="skeleton skeleton-text"></div>
    //     <div className="skeleton skeleton-button"></div>
    // </div>
    
    <div class="bookmark-detail skeleton-loading">
        <div class="header-btn-container">
            <div class="skeleton" style="width: 80px; height: 24px;"></div>
            <button class="header-close-btn">
                <span class="skeleton" style="width: 24px; height: 24px;"></span>
            </button>
        </div>

        <div class="detail-info">
            <div class="detail-image skeleton"></div>

            <div class="detail-title-container skeleton"></div>

            <div class="summary-container">
                <div class="detail-text-container skeleton"></div>
            </div>

            <div class="memo-container">
                <div class="detail-text-container skeleton"></div>
            </div>

            <div class="tags-container">
                <div class="tag-item skeleton"></div>
                <div class="tag-item skeleton"></div>
                <div class="tag-item skeleton"></div>
            </div>
        </div>
    </div>
);

export default Skeleton;