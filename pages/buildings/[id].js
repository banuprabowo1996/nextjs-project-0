import React from 'react'
import { useRouter } from 'next/router'

export default function BulidingDetail() {

    const router = useRouter()
    const { id } = router.query
    return (
        <div>Page detail {id}</div>
    )
}
