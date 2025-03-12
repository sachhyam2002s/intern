interface user {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}
interface user{
    githubtoken: string
}
interface admin extends user{       //using inheritance
    role: "admin" | "ta" | "learner"
}
const eren: admin = {dbId:104, email: "eren@aot.com", userId: 80,
    githubtoken: "github",
    role: "admin",
    startTrail:  () => {
        return "trail started"
    },
    getCoupon: (name: "eren", off:10) => {
        return 10
    }
}
eren.email = "yeager@aot.com"

export{}