const portfolioData = {
    film: {
        id: "film-video",
        title: "Film & Video",
        type: "video_gallery",
        items: [
            { title: "Mon épicier", videoId: "jrCoEl_4gY4", thumb: "resources/MonEpicier.jpg" },
            { title: "Thermal Shutdown", videoId: "SnsG77LGZvs", thumb: "resources/ThermalShutdown.jpg" },
            { title: "Brick by Brick", videoId: "aFLu1FLZkQE", thumb: "resources/BrickByBrick.jpg" },
            { title: "L'exposition Abandonnée", videoId: "-pJ0PG24Od4", thumb: "resources/expoThumbnail.jpg" },
            { title: "The city, the body", videoId: "G0hbverd19M", thumb: "resources/CityBody.jpg" },
            { title: "Les rues de Montréal", videoId: "-J4v9c1_ru8", thumb: "resources/RuesMTL0.jpg" },
        ]
    },
    photography: {
        id: "photography",
        title: "Photography",
        type: "project_gallery",
        // description: "Click the works below to see more complex projects.",
        showGrid: true,
        items: [
            {
                modalId: "photo-modal-1",
                title: "Photoshop Editing",
                mediums: "Photoshop",
                date: "2026",
                coverThumb: "resources/PSEditing.jpg",
                gridImage: "resources/PSEditing.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "comparison", beforeSrc: "resources/highres_scan.jpg", afterSrc: "resources/highres_scan_after.jpg", thumb: "resources/highres_scan_after.jpg" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "photo-modal-2",
                title: "Photography Project 2",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/submerged_20.jpg",
                gridImage: "resources/photography_project_1_1776021263989.png",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "photo-modal-3",
                title: "Photography Project 3",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/photography_grid_1_1776021281333.png",
                gridImage: "resources/photography_grid_1_1776021281333.png",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            }
        ]
    },
    animation: {
        id: "3d-animation",
        title: "3D & Animation",
        type: "project_gallery",
        items: [
            {
                modalId: "animation-modal-1",
                title: "Submerged (Unreal Engine 5)",
                mediums: "Unreal Engine 5",
                date: "2026",
                coverThumb: "resources/submerged_20.jpg",
                desc: "This project engages with the themes of hidden social and technological architectures by submerging the Unreal engine City Sample under an ocean of polluted water, illustrating how people seem to persist unbothered in their daily routines even as the world around them collapses. The player spawns as an immobilized ragdoll, unable to move or act, reduced to observing the environment. This perspective highlights how contemporary life is shaped by opaque systems, critiquing how consumption, waste cycles, automation, and luxury shape our everyday existence. The work the work critiques how objects pushed as conveniences usually are most likely in the interest of profit, than global improvements, and lead to both an environmental and social overload. The city therefore represents our normalization of excess, and the invisible mechanisms sustaining and pushing it.",
                slides: [
                    { type: "youtube", videoId: "QJe2xmmnVCs", thumb: "resources/submerged_20.jpg" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "animation-modal-2",
                title: "3D Animation 2",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/submerged_20.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "animation-modal-3",
                title: "3D Animation 3",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/CityBody.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            }
        ]
    },
    coding: {
        id: "creative-coding",
        title: "Interactive & Creative Coding",
        type: "project_gallery",
        items: [
            {
                modalId: "coding-modal-1",
                title: "Creative Coding 1",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/creative_coding_1_1776021311202.png",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "coding-modal-2",
                title: "Creative Coding 2",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/submerged_20.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "coding-modal-3",
                title: "Creative Coding 3",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/BrickByBrick.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            }
        ]
    },
    physical: {
        id: "physical-computing",
        title: "Physical Computing & Fabrication",
        type: "project_gallery",
        items: [
            {
                modalId: "physical-modal-1",
                title: "Physical Computing 1",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/physical_comp_1_1776021331836.png",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "physical-modal-2",
                title: "Physical Computing 2",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/submerged_20.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            },
            {
                modalId: "physical-modal-3",
                title: "Physical Computing 3",
                mediums: "Tech A, Tech B",
                date: "2026",
                coverThumb: "resources/expoThumbnail.jpg",
                desc: "This is where I will place the detailed description for the project. Explain my conceptual approach, the creative process, technical challenges, and final outcome. This modal can easily be duplicated and modified for each work, meow.",
                slides: [
                    { type: "image", src: "resources/photography_project_1_1776021263989.png", thumb: "resources/photography_project_1_1776021263989.png" },
                    { type: "image", src: "resources/creative_coding_1_1776021311202.png", thumb: "resources/creative_coding_1_1776021311202.png" },
                    { type: "image", src: "resources/3d_animation_1_1776021296612.png", thumb: "resources/3d_animation_1_1776021296612.png" }
                ]
            }
        ]
    }
};
