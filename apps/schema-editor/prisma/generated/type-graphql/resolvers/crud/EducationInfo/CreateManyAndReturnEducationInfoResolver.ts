import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEducationInfoArgs } from "./args/CreateManyAndReturnEducationInfoArgs";
import { EducationInfo } from "../../../models/EducationInfo";
import { CreateManyAndReturnEducationInfo } from "../../outputs/CreateManyAndReturnEducationInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EducationInfo)
export class CreateManyAndReturnEducationInfoResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEducationInfo], {
    nullable: false
  })
  async createManyAndReturnEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEducationInfoArgs): Promise<CreateManyAndReturnEducationInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
