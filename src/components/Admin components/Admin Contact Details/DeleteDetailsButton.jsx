"use client"
import { deleteContactDetails } from '@/app/actions/details'
import { useRequest } from '@/components/custom hooks/useRequest'
import { Button } from '@/components/ui/button'
import React from 'react'

const DeleteDetailsButton = ({type,id}) => {
    const{loading,sendRequest}=useRequest()
    const handleDelete = async() => {
        // Implement the delete logic here
    
        await sendRequest(()=>deleteContactDetails(type,id))
        // if(type=="schedule" || type=="contact"){
            
        // }
        // else if(type=="request_a_call"){
        //     await sendRequest(()=>deleteContactDetails(type,id))
        // }
        // else if(type=="subscribe"){
        //    await sendRequest(()=>deleteContactDetails(type,id))
        // }
    }

  return (
    <div>
        <Button variant="destructive" onClick={handleDelete}>
           {loading ? "Deleting..." : "Delete"}
        </Button>
    </div>
  )
}

export default DeleteDetailsButton