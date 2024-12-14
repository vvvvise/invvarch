import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEducationInfoArgs } from "./args/CreateOneEducationInfoArgs";
import { EducationInfo } from "../../../models/EducationInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EducationInfo)
export class CreateOneEducationInfoResolver {
  @TypeGraphQL.Mutation(_returns => EducationInfo, {
    nullable: false
  })
  async createOneEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEducationInfoArgs): Promise<EducationInfo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
