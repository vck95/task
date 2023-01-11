let students = [

    {
        roll_no: 101,
        name: 'Amit Patel',
        subject_code: [1001, 1002, 1003, 1004, 1005]
    },

    {
        roll_no: 102,
        name: 'Bhupendra Patidar',
        subject_code: [1001, 1002, 1004, 1005, 1006]
    },

    {
        roll_no: 103,
        name: 'Chetan Thankre',
        subject_code: [1001, 1002, 1003, 1007, 1008]
    },

    {
        roll_no: 104,
        name: 'Deepak Sahu',
        subject_code: [1001, 1002, 1005, 1007, 1008]
    },

    {
        roll_no: 105,
        name: 'Hardik Pandya',
        subject_code: [1001, 1002, 1003, 1004, 1005]
    }
];

let subjects = [

    {
        subject_code: 1001,
        subject_name: 'Hindi'
    },

    {
        subject_code: 1002,
        subject_name: 'English'
    },

    {
        subject_code: 1003,
        subject_name: 'Maths'
    },

    {
        subject_code: 1004,
        subject_name: 'Physics'
    },

    {
        subject_code: 1005,
        subject_name: 'Chemistry'
    },

    {
        subject_code: 1006,
        subject_name: 'Biology'
    },
    {
        subject_code: 1007,
        subject_name: 'Information Practice'
    },

    {
        subject_code: 1008,
        subject_name: 'Commerce'
    }
];


let response = {
    message: 'student information',
    status: 1,
    data: {
        student_Roll_No: 101,
        student_name: 'Amit Patel',
        student_subjects: [
            {
                subject_code: 1001,
                subject_name: 'Hindi'
            },
            {
                subject_code: 1002,
                subject_name: 'English'
            },

            {
                subject_code: 1003,
                subject_name: 'Maths'
            },
            {
                subject_code: 1004,
                subject_name: 'Physics'
            },

            {
                subject_code: 1005,
                subject_name: 'Chemistry'
            },
        ]
    }
}

