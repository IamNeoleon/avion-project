import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = () => (
    <ContentLoader
        speed={1.5}
        width='100%'
        height='100%'
        viewBox="0 0 305 462"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="0" ry="0" width="305" height="375" />
        <rect x="0" y="400" rx="0" ry="0" width="154" height="14" />
        <rect x="0" y="435" rx="0" ry="0" width="45" height="11" />
    </ContentLoader>
)

export default CardLoader

