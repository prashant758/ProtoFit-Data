// exerciseData.js

const exerciseData = {
    standard: {
        title: 'Standard Push Up',
        image: 'standard-pushup.svg',
        video: 'https://youtu.be/mECzqUIDWfU?si=ePSpGzGzFOotmnMX',
        description: 'The standard push-up is a classic exercise that targets the chest, shoulders, triceps, and core.',
        tips: [
            'Keep your body in a straight line',
            'Position hands slightly wider than shoulder-width',
            'Lower until chest nearly touches the floor',
            'Push back up to starting position'
        ],
        bodyFocus: {
            arms: 60,
            chest: 95,
            core: 40
        }
    },
    wide: {
        title: 'Wide Push Up',
        image: 'wide-pushup.svg',
        video: 'https://youtu.be/EsIdzx1J0iA?si=uh_I5RDMW8UjSD98',
        description: 'Wide push-ups place more emphasis on the chest muscles by positioning the hands wider than shoulder-width apart.',
        tips: [
            'Place hands wider than shoulder-width',
            'Keep elbows at a 45-degree angle',
            'Lower until chest nearly touches the floor',
            'Focus on squeezing chest muscles'
        ],
        bodyFocus: {
            arms: 60,
            chest: 95,
            core: 40
        }
    },
    diamond: {
        title: 'Diamond Push Up',
        image: 'diamond-pushup.svg',
        video: 'https://youtu.be/XtU2VQVuLYs?si=FM0jADOkD7GEqhzk',
        description: 'Diamond push-ups target the triceps more intensely by positioning the hands close together in a diamond shape.',
        tips: [
            'Form a diamond shape with your thumbs and index fingers',
            'Position hands directly under your chest',
            'Keep elbows close to your body',
            'Lower until chest touches your hands'
        ],
        bodyFocus: {
            arms: 90,
            chest: 60,
            core: 50
        }
    },
    incline: {
        title: 'Incline Push Up',
        image: 'incline-pushup.svg',
        video: 'https://youtube.com/shorts/SOu-3_YyX2c?si=0KqtlWpFOn_b6Ben',
        description: 'Incline push-ups are easier than standard push-ups and are great for beginners. They place less stress on the shoulders and arms.',
        tips: [
            'Place hands on an elevated surface',
            'Keep body straight from head to heels',
            'Lower chest toward the elevated surface',
            'Push back up to starting position'
        ],
        bodyFocus: {
            arms: 50,
            chest: 75,
            core: 35
        }
    },
    decline: {
        title: 'Decline Push Up',
        image: 'decline-pushup.svg',
        video: 'https://youtu.be/QAF830S96gs?si=LGUvWaeZmSHGT7Eb',
        description: 'Decline push-ups are more challenging than standard push-ups and place more emphasis on the upper chest and shoulders.',
        tips: [
            'Place feet on an elevated surface',
            'Position hands on the floor at shoulder width',
            'Lower until chest nearly touches the floor',
            'Engage core throughout the movement'
        ],
        bodyFocus: {
            arms: 75,
            chest: 90,
            core: 65
        }
    }
};

export default exerciseData;
